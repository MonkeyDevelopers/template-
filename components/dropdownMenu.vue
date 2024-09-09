<template>
	<div class="modal_header_absolute">
		<div @click="openModal()">
			<slot></slot>
		</div>
		
		<Transition name="fade">
			<div class="modal_header_actions" v-if="action" ref="modal_ref">
				<h2>{{ title }}</h2>
				<hr>
				<div class="modal_header_actions_item" v-for="option in options">
					<icon :name="option.icon" class="modal_header_actions_item_icon" />
					<span>{{ option.name }}</span>
				</div>
			</div>
		</Transition>
			
	</div>

</template>

<script setup>
	const action = ref(false);

	function openModal() {
		
		if(action.value) {
			action.value = false;
		} else {
			action.value = true;
		}
		
	}
	
	const props = defineProps({
		title: { type: String, default: "", required: false },
		options: { type: Array, default: [], required: false },
	});

	const modal_ref = ref(null);
	onClickOutside(modal_ref, (event) => {
		if (action.value == true) {
			action.value = false;
		}
	});
	
</script>

<style scoped>
.header_menu_icon {
	color: #dcdcdc;
	font-size: 35px;
	cursor: pointer;
	transition: .3s;
	padding: 5px;
	border-radius: 4px;
}

.header_menu_icon:hover {
	background: #242424;
	color: white;
}

.modal_header_absolute {
	position: relative;
}

.modal_header_actions {
	width: 230px;
	background: #0E0E0E;
	border: 2px solid #171717;
	border-radius: 6px;
	padding: 15px;
	position: absolute;
	top: 110%;
	right: 0;
	z-index: 5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 10px;
}

.modal_header_actions h2 {
	font-size: 15px;
	color: #dcdcdc;
	font-weight: 400;
}

.modal_header_actions hr {
	width: 100%;
	height: 2px;
	background: #171717;
}

.modal_header_actions_item {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 8px;
	border-radius: 6px;
	column-gap: 10px;
	position: relative;
	/* background: red; */
	cursor: pointer;
	transition: .3s;
}

.modal_header_actions_item:hover {
	background: #171717;
}

.modal_header_actions_item span {
	position: absolute;
	white-space: nowrap;
	left: 55px;
	font-size: 12px;
	color: #959595;
	transition: .3s;
}

.modal_header_actions_item_icon {
	font-size: 20px !important;
	color: #959595;
	transition: .3s !important;
}


.modal_header_actions_item:hover span {
	color: white;
}

.modal_header_actions_item:hover .modal_header_actions_item_icon {
	color: white;
}

/* transition */

.fade-enter-active {
   transition: all .2s;
}

.fade-leave-active {
   transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter-from,
.fade-leave-to {
   opacity: 1;
   opacity: 0;
}

</style>