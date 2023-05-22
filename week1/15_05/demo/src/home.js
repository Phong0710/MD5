import {Component} from "react";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "Phong",
                    age: 24
                },
                {
                    name: "Phong123",
                    age: 20
                },
            ],
            inputName: '',
            inputAge: '',
            currenIndex: -1
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    add = () => {
        this.setState({
                list: [...this.state.list,
                    {
                        name: this.state.inputName,
                        age: this.state.inputAge
                    }],
                inputName: '',
                inputAge: ''
            }
        )
        // console.log(this.state.list)
    }
    remove = (e) => {
        let index = e.target.value;
        let newList = [...this.state.list];
        newList.splice(index, 1);
        this.setState({list: newList});
    }
    edit = (index) => {
        console.log(index)
        this.setState({
            currenIndex: index,
            inputName: this.state.list[index].name,
            inputAge: this.state.list[index].age,
        })
    }
    save = () => {
        let newList = [...this.state.list]
        newList[this.state.currenIndex] = {name: this.state.inputName, age: this.state.inputAge}
        this.setState({
            list: newList,
            inputName: '',
            inputAge: '',
            currenIndex: -1
        })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.inputName} placeholder={'name'} name={"inputName"}
                       onChange={this.change}/>
                <input type="text" value={this.state.inputAge} placeholder={'age'} name={'inputAge'}
                       onChange={this.change}/>
                {
                    this.state.currenIndex === -1 ? <button onClick={this.add}>Click</button> :
                        <button onClick={this.save}>Edit</button>
                }


                {this.state.list.map((item, index) => (
                    <h2 key={index} style={{color: this.props.color}}> Name: {item.name} | Age: {item.age}
                        <button onClick={this.remove}>Delete</button>
                        <button onClick={() => {
                            this.edit(index)
                        }
                        }>Edit
                        </button>
                    </h2>

                ))}
            </>
        )
    }
}