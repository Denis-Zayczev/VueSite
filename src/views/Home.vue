<template>
	<div class="home">
		<carusel />
		<div class="container home__offering">
			<div class="row">
				<div class="col-md-4 home_border">
					<h3 class="home__offeringTitle">We are Offering the Best Estate Deals</h3>
				</div>
				<div class="col-md-8">
					<p>
						Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum.
						Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum
						elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
						consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing
						elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
					</p>
				</div>
			</div>
		</div>
		<feauters :data="featureData" />

		<div class="properties">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12">
						<h2 class="properties__h2">
							Featured
							<b>Properties</b>
						</h2>
					</div>
					<div class="col-md-12 col-sm-12">
						<p class="properties__subtitle">
							Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in
							velit vel ipsum auctovinar.
						</p>
					</div>
				</div>

				<Properties :propertiesData="propertiesData" />

			

			</div>
		</div>

		<div class="home__slider">
			<carousel-picture-content/>
		</div>
	</div>
</template>

<script>
	import { featureData, propertiesData } from '../data/data.dummy'

	// @ is an alias to /src
	import Carusel from '../components/Carusel'
	import Feauters from '../components/Feauters'
	import Properties from '../components/Properties'
	import CarouselPictureContent from '../components/CarouselPictureContent'

	export default {
		name: 'Home',
		components: {
			Carusel,
			Feauters,
			Properties,
			CarouselPictureContent
		},
		data() {
			return {
				featureData: featureData,
				propertiesData: propertiesData,
			}
		},
	}
</script>
