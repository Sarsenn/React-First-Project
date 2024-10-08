import './employess-add-form.css';

const EmployessAddFrom = () => {
	return (
		<div className="app-add-form">
			<h3>Добавте нового сотрудника</h3>
			<form 
			className="add-form d-flex">
				<input type="text"
				 className="form-control new-post-lable"
				 placeholder="Как его зовут?"
				 />
				 <input type="number"
				 className="form-control new-post-lable"
				 placeholder="З/П в $?"
				 />
				 <button type="submit"
				 	className="btn btn-outline-light">
					Добавить
				</button>
			</form>
		</div>
	)
}

export default EmployessAddFrom;