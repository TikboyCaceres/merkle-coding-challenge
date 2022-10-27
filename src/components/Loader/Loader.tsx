import "./styles.scss";

const Loader = () => {
	return (
		<div id="Loader">
			<div className="loader-container">
				<svg className="circular">
					<circle
						className="path"
						cx="50"
						cy="50"
						r="20"
						fill="none"
						strokeWidth="5"
						strokeMiterlimit="10"
					></circle>
				</svg>
			</div>
		</div>
	)
}

export default Loader;