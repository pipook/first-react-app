import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty as isMyArrayEmpty } from './Utils';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showBlogs: true,
            blogArr: [
                {
                    id: 1,
                    title: 'Blog Title 1',
                    description: 'Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor',
                    likeCount: 0
                },
                {
                    id: 2,
                    title: 'Blog Title 2',
                    description: 'Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor',
                    likeCount: 0
                },
                {
                    id: 3,
                    title: 'Blog Title 3',
                    description: 'Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor Loren Ipsum Dolor',
                    likeCount: 0
                }
            ]
        }
        console.log('Inside the constructor.');
    }
    onLikeBtnClick = (pos) => {
        //alert('Like Click on position => ' + pos);
        const updatedBlogList = this.state.blogArr;
        const updatedBlogObj = updatedBlogList[pos];
        updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
        updatedBlogList[pos] = updatedBlogObj;

        this.setState({blogArr: updatedBlogList});
    }
    onHideBtnClick = () => {
        //let updatedState = !this.state.showBlogs;
        this.setState((prevState, prevProps) => {
            return {showBlogs: !prevState.showBlogs}
        });
        console.log(this.state.showBlogs);
    }

    shouldComponentUpdate(){
        console.log('Inside shouldComponentUpdate');
        return true;
    }

    componentDidMount(){
        console.log('Component Did Mount');
    };

    componentWillUnmount(){
        console.log('Component Unmount');
    }

    componentDidUpdate(){
        console.log('Inside ComponentDidUpdate');
    }

    render() {
        console.log('Render called for AppJs');
        const blogCards = isMyArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
            //console.log(item);
            return (
                <BlogCard className={'Blog'} key={item.id} title={item.title} description={item.description} likeCount={item.likeCount} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
            )
        })
        //console.log('Render Called');
        //console.log(this.state);
        return(
            <div className="App">
                <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
                <br></br>
                {
                    this.state.showBlogs ? blogCards : null
                }
            </div>
        );
    }
}

export default App;
