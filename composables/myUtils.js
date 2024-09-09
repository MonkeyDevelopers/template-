import { 
   parseISO, 
   format, 
} from 'date-fns';


export function limitTitle (string = '', limit = 0) {  
   if(string.length > limit) {
      return string.substring(0, limit) + '...';
   } else {
      return string.substring(0, limit)
   }
}

export function formatDate(date) {
   const firstDate = parseISO(date);

   const formattedDate = format(
   firstDate, 
      "dd/MM/yyyy"
   );
   return formattedDate;
}

export function formatDateTime(time) {
   const date = new Date(time);

   const year = date.toLocaleString("default", { year: "numeric" });
   const month = date.toLocaleString("default", { month: "2-digit" });
   const day = date.toLocaleString("default", { day: "2-digit" });
   const hour = date.toLocaleString("default", { hour: "2-digit" });
   const minute = date.toLocaleString("default", { minute: "2-digit" });

   return `${day}/${month}/${year} ${hour}:${minute}`;
}

export function formatCreatedAt(dateTimeString) {
   const date = new Date(dateTimeString);

   const year = date.getFullYear();
   const month = (date.getMonth() + 1).toString().padStart(2, '0');
   const day = date.getDate().toString().padStart(2, '0');
   const hour = date.getHours().toString().padStart(2, '0');
   const minute = date.getMinutes().toString().padStart(2, '0');

   return `${day}/${month}/${year} ${hour}:${minute}`;
}

export function formatContact(dateTimeString) {
   const date = new Date(dateTimeString);

   const year = date.getFullYear();
   const month = (date.getMonth() + 1).toString().padStart(2, '0');
   const day = date.getDate().toString().padStart(2, '0');
   const hour = date.getHours().toString().padStart(2, '0');
   const minute = date.getMinutes().toString().padStart(2, '0');

   return `${hour}:${minute} - ${day}/${month}/${year}`;
}

export function formatValue(value) {
   let val = (value/1).toFixed(2).replace('.', ',');
   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatWeight(value) {
   let val = (value/1).toFixed(3).replace('.', ',');
   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatPhone(phone) {
   const numbers = phone.replace(/\D/g, '');
   
   const format = '($1) $2-$3';
   const formated_phone = numbers.replace(/(\d{2})(\d{5})(\d{4})/, format);

   return formated_phone;   
}

export function formatDefaultPhone(phone) {
   // Remove tudo que não seja número
   const numbers = phone.replace(/\D/g, '');
   
   // Define os formatos para telefones de 8 e 9 dígitos
   const format8 = '($1) $2-$3';
   const format9 = '($1) $2-$3';
   
   let formattedPhone;
   
   // Verifica o comprimento do número e aplica o formato adequado
   if (numbers.length === 10) { // (xx) xxxx-xxxx
       formattedPhone = numbers.replace(/(\d{2})(\d{4})(\d{4})/, format8);
   } else if (numbers.length === 11) { // (xx) xxxxx-xxxx
       formattedPhone = numbers.replace(/(\d{2})(\d{5})(\d{4})/, format9);
   } else {
       // Retorna o número original se não corresponder aos formatos esperados
       return phone;
   }

   return formattedPhone;
}

export function actualDate() {
   const date = new Date();

   var d = new Date(date),
       month = '' + (d.getMonth() + 1),
       day = '' + d.getDate(),
       year = d.getFullYear();

   if (month.length < 2) 
       month = '0' + month;
   if (day.length < 2) 
       day = '0' + day;

   // return console.log(`${year}-${month}-${day}`);
   return `${year}-${month}-${day}`;
}

export function convertMoney(invoiceValue) {

   var cleanValue = invoiceValue.replace(/[^\d,]/g, '');
   var floatValue = parseFloat(cleanValue.replace(',', '.'));

   return floatValue;
}

export function formatCnpj(cnpj) {
   cnpj = cnpj.replace(/[^\d]/g, '');

   cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
   cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
   cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
   cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');

   return cnpj;
}

export function formatCpf(cpf) {
   cpf = cpf.replace(/\D/g, '');
   cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
   return cpf;
}

export function removeTrailingZeros(numberStr) {
   // Converte a string para um número de ponto flutuante e remove os zeros desnecessários
   return parseFloat(parseFloat(numberStr).toFixed(2));
}