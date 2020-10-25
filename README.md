# This is a react app to demonstrate a carousel 

## App is deployed at 
(https://nishantcarousel2.herokuapp.com/)  \ \


# Description
This is a carousel developed using React.js \

The main aim of the task was to test my react.js skills so, more imphasis \
has been given to use react component and methods to implement the task.\ \

CSS has been used for defining the layout only. \ \

# Logic
React component classes have a state, and on changing the state of the \
component the application re-renders itself. this was the core idea of \
reloding the images and quotes by changing the state of the react app. \

# My approach 
I created a React component **Slider**. It contains three methods namely\ 
**nextImage**\
**prevImage**\
**autoSlider** \

First two methods are called by button onClick events while **autoSlider()** gets called \
when **componentDidUpdate()** gets called. It is a react lifecycle method. initially I called \
the **autoSlider()** on **componentDidMount()**

