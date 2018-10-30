export const Pet = (props) => {
	return (
		<div>
			<h2 className="some-name">{props.name}</h2>
			<h3>{props.type}</h3>
		</div>
	);
};
