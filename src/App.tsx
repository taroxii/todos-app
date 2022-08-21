import React, { useEffect, useState } from 'react';
import './App.scss'
import Progress from './container/Progress'
import Filter from './container/Filter';
import MainSection from './container/MainSection'
import Container from './components/Container'
import { connect } from 'react-redux'
import { fetchTodos } from './store/actions'
import { bindActionCreators } from 'redux';
function App({ fetchTodos }: any) {
  const [filter, setFilter] = useState<string>('All')
  useEffect(() => {
    return () => {
      fetchTodos()
    }
  })

  return (
    <div className="App">
      <Container>
        <Progress />
        <Filter filterTodos={(option: string) => { setFilter(option) }} />
        <MainSection onFilter={filter} />
      </Container>
    </div>
  );
}
const mapDispatch = (dispatch: any) => bindActionCreators({ fetchTodos }, dispatch)
export default connect(null, mapDispatch)(App);
