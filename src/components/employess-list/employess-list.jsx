import EmployessListItems from '../employess-list-items/employess-list-items';
import './employess-list.css';

const EmployessList = () => {
	return (
		<ul className="app-list list-group">
			<EmployessListItems/>
			<EmployessListItems/>
			<EmployessListItems/>
		</ul>
	)
}

export default EmployessList;