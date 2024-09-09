<template>
	<div class="sidebar_container">
		<div class="sidebar">
			<a href="/" class="sidebar_header">
				<icon class="sidebar_header_icon" name="ph:package" />
				<span>Admin</span>
			</a>

			<a v-for="option in options" :href="option.link" class="sidebar_item"
				:class="useRoute().name == option.active ? 'sidebar_item_active' : ''">
				<icon class="sidebar_item_icon" :name="option.icon" />
				<span>{{ option.name }}</span>
			</a>
		</div>
	</div>
	<SidebarMobileBottom :options />
</template>

<script setup>
const props = defineProps({
	options: { type: Object, default: {}, required: true },
});
</script>

<style scoped>
.sidebar_container {
	height: 100svh;
	padding: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
}

.sidebar {
	width: 64px;
	height: 100%;
	overflow: hidden;
	background: #0E0E0E;
	border: 2px solid #171717;
	border-radius: 6px;
	/* background: red; */
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	row-gap: 5px;
}

.sidebar_container:hover .sidebar {
	width: 250px;
}


.sidebar_item {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px;
	border-radius: 6px;
	column-gap: 10px;
	position: relative;
	/* background: red; */
	cursor: pointer;
	transition: .3s;
}

.sidebar_item:hover {
	background: #171717;
}

.sidebar_item span {
	position: absolute;
	white-space: nowrap;
	left: 55px;
	font-size: 13px;
	color: #959595;
	transition: .3s;
}

.sidebar_item_icon {
	font-size: 20px !important;
	color: #959595;
	transition: .3s !important;
}

.sidebar_item_active {
	background: #c51b1b !important;
}

.sidebar_item_active span {
	color: white !important;
	font-weight: 300;
}

.sidebar_item_active .sidebar_item_icon {
	color: white !important;
}

.sidebar_item:hover span {
	color: white;
}

.sidebar_item:hover .sidebar_item_icon {
	color: white;
}

/* sidebar_header */

.sidebar_header {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 8px;
	border-radius: 6px;
	column-gap: 10px;
	position: relative;
	/* background: red; */
	transition: .3s;
	margin-bottom: 20px;
	cursor: pointer;
}

.sidebar_header span {
	position: absolute;
	text-align: start;
	left: 55px;
	font-size: 16px;
	font-weight: 600;
	color: #ffffff;
	transition: .3s;
}

.sidebar_header_icon {
	font-size: 24px !important;
	color: #c51b1b;
}


@media screen and (max-width: 1024px) {

.sidebar_container {
   display: none;
}

}
</style>