import React, { useState } from 'react';
console.log('12312')
import MobileLayout from '../MobileLayout';
import MobileSelect from '../MobileSelect';

import './MobileInterface.css';

const MobileInterface = ({
  sections = [],
  tabNames = [],
  cardInfo = [],
  viewType = '',
  topTitle = '??',
  children
}) => {
  const childrenArray = React.Children.toArray(children);
  const subview = 'competitions';
  const handle = {}
  
  const layoutChildren = childrenArray.length > 0 ? React.Children.toArray(childrenArray[0].props.children) : [];
  const selectChildren = childrenArray.length > 1 ? React.Children.toArray(childrenArray[1].props.children) : [];
  return (
    <main className="MobileInterface">
      {
        subview
        ? (
            <MobileLayout sections={sections} onBack={handle.back} selected={1} tabNames={tabNames} title={subview}>
              <div>
                <span>{viewType}:</span>
                <span>{subview}</span>
              </div>
              {layoutChildren}
            </MobileLayout>
          )
        : (
          <MobileSelect sections={sections} onSelect={handle.select}>
              <div>{topTitle}:</div>
              {selectChildren}
          </MobileSelect>
        )
      }
    </main>
  )
};

export default MobileInterface;
