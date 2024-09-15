<template>
	<div class="container">
		<div class="sidebar">
			<slot name="header"></slot>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped>
.container {
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

.container:hover .sidebar {
	width: 250px;
}



@media screen and (max-width: 1024px) {

.container {
   display: none;
}

}
</style>