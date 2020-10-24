
import React from 'react';



let data = {
    "title" : "Learn to Code ",
    "subtitle" : "Coding is fun let's explore it ",
    "img-url" : "/img/img1.jpg"
};



/*
function Slider(){
  return(
      <div>
        <h4> Slider </h4>
      </div>
  );
}
*/
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.state = {
            counter:0
        };
        this.data = ['slide1', 'slide2', 'slide3'];
        this.imgUrl = [
            "https://ik.imagekit.io/qs7wkx3a89/img2_PHLIuLACD.jpg",
            "https://ik.imagekit.io/qs7wkx3a89/img7_BmuWsHJRL.jpg",
            "https://ik.imagekit.io/qs7wkx3a89/img4__8mTHaFN2.jpg",
            "https://ik.imagekit.io/qs7wkx3a89/img1_4KtlfoyVSs.jpg",
            "https://ik.imagekit.io/qs7wkx3a89/img6_F3q6H9Vzp.jpg",
            "https://ik.imagekit.io/qs7wkx3a89/img5_IkEr6d1rCQ.jpg",
            "https://ik.imagekit.io/qs7wkx3a89/img3_VOEyA5rvs.jpg"
        ];
        
    }

    nextImage(e){
        console.log("Next button clicked ");
        if(this.state.counter < 6){
        this.setState({
            counter: this.state.counter + 1
        })      
       
    }
    if(this.state.counter === 6){
        this.setState({
            counter: 0
        })
    }
    }

    //previous image 
    prevImage(a){
        console.log("prev btn clicked");
        if(this.state.counter > 0){
        this.setState({
            counter: this.state.counter - 1
        })      
       
    }
    if(this.state.counter === 0){
        this.setState({
            counter: 6
        })
    }
    }

    render(){
        return (
            <div className = "slider"> 
            <div className = "slide">
                   <img src={this.imgUrl[this.state.counter]} alt="image not found"></img>
                   {console.log(this.imgUrl[0])}
                  </div>
              <button id="next" onClick={this.nextImage} > NEXT </button>
              <button id="prev" onClick={this.prevImage} > PREV </button>
            </div>
        );
    }
}

export default Slider;


/*
class carousel extends React.Component{
    constructor(props){
        super(props);
            this.state = {content : data};
        
    }

    render(){
        return(
            <Slider data = {content}/>
        );
    }
}
*/

