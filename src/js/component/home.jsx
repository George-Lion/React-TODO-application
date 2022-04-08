import React, { useState } from "react";
import TareaForm from "./tareaForma";
import Tarea from "./tarea";

const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	};

	const borrarTarea = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);
	};

	console.log(listaTareas);

	return (
		<div className="Home caja mx-auto rounded mt-4">
			<div className=" caja2">
				<TareaForm nuevaTarea={nuevaTarea} />
				<div className="lista">
					{listaTareas.map((e, index) => (
						<Tarea
							tarea={e}
							key={index}
							borrarTarea={borrarTarea}
							id={index}
						/>
					))}
				</div>
				<div className="num">Number of tasks {listaTareas.length}</div>
			</div>
		</div>
	);
};

export default Home;
