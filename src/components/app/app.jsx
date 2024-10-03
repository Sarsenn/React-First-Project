import "./app.css";
import SearchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import EmployessList from "../employess-list/employess-list";
import EmployessAddFrom from "../employess-add-form/employess-add-form";

function App () {
	return (
		<div className="app">
			<AppInfo/>
			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			<EmployessList/>
			<EmployessAddFrom/>
		</div>
	)
}

export default App;