import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div<{size: string}>`
  display: block;
  position: relative;
  margin: auto;
  width: 256px;
  background-color: #eaecef;
  height: ${ props => 
              props.size === 's' ? '10px'
            : props.size === 'm' ? '15px'
            : props.size === 'l' ? '20px'
            : '15px' 
           };
  border-radius: 6px;
  overflow: hidden;
`;

const Progress = styled.div<{progress: number}>`
  display: block;
  width: ${props => Math.min(Math.max(props.progress, 0), 100) + '%'};
  background-color: #2cbe4e;
  height: 100%; 
`

interface IProps {
  size: string,
  progress: number
}

export default class ProgressBar extends Component<IProps> {
  defaultProps = {
    size: 'm',
    progress: 0
  }
  
  shouldComponentUpdate(nextProps: IProps) {
    return (this.props.progress !== nextProps.progress)
        || (this.props.size !== nextProps.size);
  }

  render() {
    return (
      <Bar size={ this.props.size }>
        <Progress progress={ this.props.progress } />
      </Bar>
    );
  }
}