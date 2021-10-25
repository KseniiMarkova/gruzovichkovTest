import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core";

export default function Page(id, options, count, color, data) {

	return <MyWonderfulComponent id="id" options="options" count="count" color="color" data="data">I'm text from a component</MyWonderfulComponent>

}

function MyWonderfulComponent(id, options, children, other) {

	const { count } = other;

	const { summ, setSumm } = useState(count);

	useEffect(() => {

		if (id && options?.params?.fields?.isDynamic) {

			setSumm(summ + 1);

		}

	});

	return (
		<React.Fragment>
			<h1>Hello World!</h1>

			<Grid>

				<Grid xs={12}>{children}</Grid>

				<Grid>{summ}</Grid>

			</Grid>
		</React.Fragment>


	);

}