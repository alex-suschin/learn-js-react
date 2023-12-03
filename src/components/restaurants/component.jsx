import React from 'react'
import { Restaurant } from '../restaurant/component'

export const Restaraunts = ({ restaurants }) => {
	return (
		<div>
			{restaurants.map((restaurant) => (
				<Restaurant key={restaurant.name} restaurant={restaurant} />
			))}
		</div>
	)
}
