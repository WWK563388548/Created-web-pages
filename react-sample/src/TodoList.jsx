import React, {Component} from 'react';
import {Row, Col, Input, List, Button} from 'antd';
import 'antd/dist/antd.css';
import './style/bg.css';

class TodoList extends Component {

    constructor(props){
        super(props);

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

        this.state = {
            inputValue: "",
            list: [],
        };
    }

    componentDidMount

    render() {
        return (
            <div 
                className="bg"
                style={{
                    width: "100vw",
                }}
            >
                <Row
                    type="flex" 
                    justify="center"
                    style={{
                        height: "100vh",
                    }}
                >
                    <Col
                        span={10}
                    >
                        <div 
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: "center",
                                height: "250px",
                            }}
                        >
                            <Input
                                style={{
                                    top: "50%",
                                }}
                                placeholder="Please Input Something"
                                onChange={this.handleInputValue}
                                value={this.state.inputValue}
                            />
                            <Button 
                                type="primary"
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    top: "50%",
                                }}
                                onClick={this.handleAddItem}
                            >
                                Submit
                            </Button>
                        </div>
                        <List
                            style={{
                                marginBottom: "20px",
                                marginTop: "10px",
                                background: "#ddd"
                                // color: "#fff",
                            }}
                            size="large"
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item, index) => (
                                <List.Item 
                                    key={item}
                                >
                                    {item}
                                </List.Item>
                            )}
                        />                        
                    </Col>
                </Row>
            </div>
        );
    }

    handleInputValue(event){
        const inputData = event.target.value;
        this.setState(() => {
            return {
                inputValue: inputData,
            }
        });
    } 

    handleAddItem() {
        this.setState(() => {
            return {
                list: [...this.state.list, this.state.inputValue],
                inputValue: '',
            }
        });
    }

}

export default TodoList;