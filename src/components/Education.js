import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () => {
  return (
    <div style={{marginBottom:"200px"}}>
     <h2 style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', textTransform: 'uppercase', color: '#fff' }}>Education</h2>

      <VerticalTimeline className="vertical-timeline-dark">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2020"
          iconStyle={{ background: '#4B3883', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's Degree 2020</h3>
          <p>Obtained Bachelor's degree in Physics.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2020-2022"
          iconStyle={{ background: '#4B3883', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Preparatory Cycle 2020-2022</h3>
          <p>Two years of preparatory cycle.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="2022-present"
          iconStyle={{ background: '#4B3883', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Engineering Cycle 2022-present</h3>
          <p>Continuing the engineering cycle.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;