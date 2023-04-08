import { Component } from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
                { name: "Alex V.", salary: 3000, increase: true, rise: false, id: 2 },
                { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all',
            maxId: 4
        }
        
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (name.length > 2 && +salary > 0) {
            const newArr = this.state.data;
            newArr.push({
            name: name,
            salary: +salary,
            increase: false,
            rise: false,
            id: this.state.maxId
            });
        
            this.setState(({maxId}) =>{
                return {
                    data: newArr,
                    maxId: maxId + 1
                }
            })
        } else {
            alert('Введите корректные данные!')
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id),
                old = data[index],
                newItem = { ...old, [prop]: !old[prop] },
                newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000': 
                return items.filter(item => +item.salary > 1000)
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    
    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length,
            increased = this.state.data.filter(item => item.increase).length,
            visibleData = this.filterPost(this.searchEmp(data, term), filter);
        
        return (
        <div className='app'>
                <AppInfo
                    employees={employees}
                    increased={increased} />
            
            <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
            </div>

            <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
            <EmployersAddForm
                    onAdd={this.addItem}/>
        </div>
    )
    }
}

export default App;