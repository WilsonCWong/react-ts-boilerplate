import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { AppState } from './store';
import styled from 'styled-components';

import { ProgressBarState } from './store/progress-bar/types';
import { updateProgress } from './store/progress-bar/actions';

import ProgressBar from './components/ProgressBar';



interface AppProps {
  progressBar: ProgressBarState;
  updateProgress: (progress: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 0;
`

const Input = styled.input`
  display: block;
`

class App extends Component<AppProps> {
  render() {
    return (
      <Container>
        <ProgressBar size='s' progress={this.props.progressBar.progress} />
        <Input 
          type="range"
          value={this.props.progressBar.progress} min={0} max={100}
          onChange={(e) => this.props.updateProgress(Number(e.currentTarget.value))}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  progressBar: state.progressBar,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    updateProgress: (progress: number) => {
      dispatch(updateProgress(progress))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
