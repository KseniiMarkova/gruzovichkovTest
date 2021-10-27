import React, { useState, useEffect } from "react";
import {Grid} from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Page(props) {

	const { id, options, count, color, data } = props;
	const other = {count, color, data};

	const message = 'Hello from SSR';
	console.log(message);

	return <MyWonderfulComponent id={id} options={options} count={count} color={color} data={data}>I'm text from a component</MyWonderfulComponent>

}

function MyWonderfulComponent(props) {

	const { id, options, other } = props;
	const { count } = other;

	const { summ, setSumm } = useState(count);

	useEffect(() => {

		if (id && options?.params?.fields?.isDynamic) {

			setSumm(summ + 1);

		}

	}, []);

	return (
		<React.Fragment>
			<Typography variant="h1" color="red">Hello World!</Typography>

			<Grid container>

				<Grid item xs={12}>{props.children}</Grid>

				<Grid item>{summ}</Grid>

			</Grid>
		</React.Fragment>

	);

}