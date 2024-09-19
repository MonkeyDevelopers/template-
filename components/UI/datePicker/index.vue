<template>
  <div class="input" @click="changeCalendarState('true')" ref="input">
    <icon name="ph:calendar-blank" class="input_icon" />
    <h2>
      {{
        selectedDate
          ? useCalendar.formatDateToShow(selectedDate)
          : placeholder
      }}
    </h2>
  </div>

  <Transition name="select-show">
    <div class="date_picker" v-if="state" ref="date_picker">
      <div class="date_picker_head">
        <icon
          name="ph:caret-left-bold"
          class="control_icon"
          @click="useCalendar.prevMonth()"
          v-if="!useCalendar.isMonthSelection.value"
        />
        <div class="calendar_spans">
          <span class="span_month" v-if="!useCalendar.isYearSelection.value" @click="useCalendar.toggleMonthSelection()">{{ useCalendar.currentMonthName }}</span>
          <span class="span_year" v-if="!useCalendar.isMonthSelection.value" @click="useCalendar.toggleYearSelection()">{{ useCalendar.currentYear }}</span>
        </div>
        <icon
          name="ph:caret-right-bold"
          class="control_icon"
          @click="useCalendar.nextMonth()"
          v-if="!useCalendar.isMonthSelection.value"
        />
      </div>
      
      <div class="calendar" v-if="!useCalendar.isYearSelection.value && !useCalendar.isMonthSelection.value">
        <div class="day_head">Dom</div>
        <div class="day_head">Seg</div>
        <div class="day_head">Ter</div>
        <div class="day_head">Qua</div>
        <div class="day_head">Qui</div>
        <div class="day_head">Sex</div>
        <div class="day_head">Sáb</div>
        <div
          v-for="day in useCalendar.daysInMonth.value"
          :key="day"
          @click="selectDate(day)"
          :class="{
            day: true,
            selected_day:
              day === selectedDate?.getDate() &&
              useCalendar.isSameMonth(selectedDate),
            today:
              day === useCalendar.currentDate.value.getDate() &&
              useCalendar.currentMonth.value === new Date().getMonth() &&
              useCalendar.currentYear.value === new Date().getFullYear(),
          }"
        >
          {{ day ? day : "" }}
        </div>
      </div>
      
      <div class="year_selection" v-if="useCalendar.isYearSelection.value">
        <span
          v-for="year in useCalendar.yearsList.value"
          @click="useCalendar.selectYear(year)"
          :class="{'selected_year': year === useCalendar.currentDate.value.getFullYear()}"
        >{{ year }}</span>
      </div>
      <div class="month_selection" v-if="useCalendar.isMonthSelection.value">
        <span
          v-for="(month, index) in useCalendar.fullMonthNames"
          @click="useCalendar.selectMonth(index)"
          :class="{'selected_month': useCalendar.currentDate.value.getMonth() === index}"
        >{{ month }}</span>
      </div>

      <div class="actions" v-if="!useCalendar.isYearSelection.value && !useCalendar.isMonthSelection.value">
        <span @click="clearDate">Limpar</span>
        <span @click="selectToday">Hoje</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number],
  placeholder: {
    type: String,
    default: "Selecione uma Data",
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedDate = ref(null);

function useFunctionCalendar() {
  
  const isMonthSelection = ref(false);
  const isYearSelection = ref(false);
  
  const currentDate = ref(new Date());
  const currentYear = computed(() => currentDate.value.getFullYear());
  const yearsRange = 12;
  const startYear = ref(currentYear.value - yearsRange);
  
  const currentMonth = computed(() => currentDate.value.getMonth());
  const changeDaysInMonth = () => {
    const firstDayMonth = new Date(
      currentYear.value,
      currentMonth.value,
      1
    ).getDay();

    const lastDayMonth = new Date(
      currentYear.value,
      currentMonth.value + 1,
      0
    ).getDate();

    const daysInMonth = [];
    for (let i = 0; i < firstDayMonth; i++) {
      daysInMonth.push(null);
    }
    for (let day = 1; day <= lastDayMonth; day++) {
      daysInMonth.push(day);
    }
    return daysInMonth;
  };

  const daysInMonth = ref(changeDaysInMonth());

  const prevMonth = () => {
    if(isYearSelection.value) {
      startYear.value -= yearsRange * 2 + 1;
    } else {
      const newDate = new Date(currentDate.value);
      newDate.setMonth(currentDate.value.getMonth() - 1);
      currentDate.value = newDate;

      daysInMonth.value = changeDaysInMonth();
    }
  };

  const nextMonth = () => {
    if(isYearSelection.value) {
      startYear.value += yearsRange * 2 + 1;
    } else {
      const newDate = new Date(currentDate.value);
      newDate.setMonth(currentDate.value.getMonth() + 1);
      currentDate.value = newDate;

      daysInMonth.value = changeDaysInMonth(); 
    }
  };
  
  const fullMonthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  
  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const currentMonthName = computed(() => {
    return fullMonthNames[currentMonth.value];
  });

  const formatDateToShow = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day} de ${monthNames[month]}, ${year}`;
  };

  const isSameMonth = (date) => {
    return (
      date.getMonth() === currentMonth.value &&
      date.getFullYear() === currentYear.value
    );
  };
  
  const toggleYearSelection = () => {
    isYearSelection.value = !isYearSelection.value;
    isMonthSelection.value = false;
  };

  const toggleMonthSelection = () => {
    isMonthSelection.value = !isMonthSelection.value;
    isYearSelection.value = false;
  };
  
  const selectMonth = (monthIndex) => {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(monthIndex);
    currentDate.value = newDate;
    daysInMonth.value = changeDaysInMonth(); 
    isMonthSelection.value = false;
  };
  
  const generateYearsList = () => {
    const years = [];
    for (let i = startYear.value; i < startYear.value + (yearsRange * 2) + 1; i++) {
      years.push(i);
    }
    return years;
  };

  const yearsList = ref(generateYearsList());
  
  watch(startYear, () => {
    yearsList.value = generateYearsList();
  }, { immediate: true });
  
  const updateStartYear = () => {
    startYear.value = currentYear.value - yearsRange;
  }
  
  const selectYear = (year) => {
    const newDate = new Date(currentDate.value);
    newDate.setFullYear(year);
    currentDate.value = newDate;
    daysInMonth.value = changeDaysInMonth();
    isYearSelection.value = false;
  };
  
  const resetCalendar = () => {
    state.value = false;
    updateStartYear();
    isMonthSelection.value = false;
    isYearSelection.value = false;
  }

  return {
    prevMonth,
    nextMonth,
    formatDateToShow,
    isSameMonth,
    currentDate,
    currentYear,
    currentMonth,
    currentMonthName,
    changeDaysInMonth,
    daysInMonth,
    isMonthSelection,
    isYearSelection,
    toggleMonthSelection,
    toggleYearSelection,
    monthNames,
    fullMonthNames,
    selectMonth,
    yearsList,
    selectYear,
    startYear,
    updateStartYear,
    resetCalendar,
  };
}

const useCalendar = useFunctionCalendar();

// Componente
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const selectDate = (day) => {
  if (day) {
    const newDate = new Date(useCalendar.currentDate.value);
    newDate.setDate(day);
    selectedDate.value = newDate;
    useCalendar.updateStartYear();
    emit("update:modelValue", formatDate(newDate));
    // state.value = false;
  }
};

const clearDate = () => {
  selectedDate.value = null;
  emit("update:modelValue", null);
};

const selectToday = () => {
  const today = new Date();
  selectedDate.value = today;
  useCalendar.currentDate.value = today;
  useCalendar.daysInMonth.value = useCalendar.changeDaysInMonth();
  useCalendar.updateStartYear();
  emit("update:modelValue", formatDate(today));
};

const date_picker = ref(null); // ref to click outside
const input = ref(null); // ref to click outside
onClickOutside([date_picker, input], (event) => {
  if (
    state.value == true &&
    !date_picker.value.contains(event.target) &&
    !input.value.contains(event.target)
  ) {
    useCalendar.resetCalendar();
  }
});

const state = ref(false); // false = closed, true = open
const changeCalendarState = (option) => {
  if (option == "true") {
    if (state.value == true) {
      useCalendar.resetCalendar();
    } else {
      // if (selectedDate.value) {
      //   currentDate.value = new Date(selectedDate.value);
      // } else {
      //   currentDate.value = new Date();
      // }
      state.value = true;
    }
  } else {
    useCalendar.resetCalendar();
  }
};

onMounted(() => {
  if (props.modelValue) {
    selectedDate.value = new Date(props.modelValue);
    useCalendar.currentDate.value = new Date(props.modelValue);
  } else {
    selectedDate.value = null;
    useCalendar.currentDate.value = new Date();
  }
});
</script>

<style>
.input {
  width: 300px;
  padding: 11px 15px;
  border-radius: 6px;
  background: #0e0e0e;
  border: 1px solid #222222;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.input:hover {
  border: 1px solid #2c2c2c;
}

.input_icon {
  font-size: 17px;
  color: #ffffff;
}

.input h2 {
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff;
}

.date_picker {
  margin-top: 3px;
  width: 260px;
  padding: 10px;
  border-radius: 6px;
  background: #0e0e0e;
  border: 1px solid #222222;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  user-select: none;
  position: absolute;
  z-index: 9999;
  transition: 0.3s;
}

.date_picker_head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar_spans {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar_spans span {
  padding: 3px 9px;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
  color: white;
  font-size: 13px
}

.calendar_spans span:hover {
  background: #222222;
}

.month_selection {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: .3s;
}

.month_selection span {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 9px;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
  color: white;
  font-size: 12px
}

.month_selection span:hover {
  background: #222222;
}

.selected_month {
  color: #ffffff;
  background-color: #c51b1b;
}

.selected_month:hover {
  background-color: #a61717 !important;
  transition: 0.3s;
}

.year_selection {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  transition: .3s;
}

.year_selection span {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 9px;
  border-radius: 3px;
  cursor: pointer;
  transition: .3s;
  color: white;
  font-size: 12px
}

.year_selection span:hover {
  background: #222222;
}

.selected_year {
  color: #ffffff;
  background-color: #c51b1b;
}

.selected_year:hover {
  background-color: #a61717 !important;
  transition: 0.3s;
}

.control_icon {
  color: #b1b1b1;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;
  padding: 3px;
  border-radius: 3px;
  user-select: none;
}

.control_icon:hover {
  background: #242424;
  color: white;
}

.calendar {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day_head {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  color: #888888;
}

.day {
  text-align: center;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  font-size: 13px;
  border-radius: 4px;
  transition: none;
}

.day:hover {
  background-color: #242424;
  transition: 0.3s;
}

.today {
  color: rgb(255, 255, 255);
  background: #242424;
  font-weight: bold;
}

.selected_day {
  color: #ffffff;
  background-color: #c51b1b;
  font-weight: bold;
}

.selected_day:hover {
  background-color: #a61717;
  transition: 0.3s;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.actions span {
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 12px;
}

.actions span:hover {
  color: #747474;
}

/* transitions */

.select-show-enter-active {
  transition: all 0.3s;
}

.select-show-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.select-show-enter-from,
.select-show-leave-to {
  opacity: 0;
}
</style>
