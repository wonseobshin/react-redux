import { render } from "@testing-library/react";
import React from "react";

class ExamplaeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            articles: [
                { title: "title 1", id:1 },
                { title: "title 2", id:2 },
                { title: "title 2", id:2 }
            ]
        };
    }
    render() {
        const {articles}= this.state;
    return <>
    <ul> {articles.map(el => <li key={el.id}>{el.title}</li>)} </ul>
    </>
    }
}