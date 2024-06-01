/*
You are tasked with building a simple traffic light component using React. The traffic light should consist of three lights: red, yellow, and green.
The lights should switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:
Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms
Your task is to implement a React component that represents the traffic light and switches between these colors based on the specified intervals.
Additionally, you should style the traffic light to make it visually appealing.
*/

import { TrafficLight } from '@/app/traffic-light/TrafficLight';

const page = () => {
  return <TrafficLight />;
};

export default page;
