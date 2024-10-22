import React from 'react';
import logo from './logo.svg';
import './App.css';
import { usePostListQuery } from './generated/graphql';

function App() {
  const postListResult = usePostListQuery({variables: {limit: 10 }});

  return (
    <div className="App">
      <h1>Post List </h1>
      <table style={{border:'solid', borderCollapse:'collapse', width:'100%'}}>
        <thead>
          <tr>
            <th style={{border:'solid', padding:'8px', width:'20%'}}>Title</th>
            <th style={{border:'solid', padding:'8px'}}>Content</th>
          </tr>
        </thead>
        <tbody>
          {
            postListResult.data?.posts.posts.map(post => (
              <tr key={post.id}>
                <td style={{border:'solid', padding:'8px'}}>{post.title}</td>
                <td style={{border:'solid', padding:'8px'}}>{post.content}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h1>Post Form</h1>
      <div>
        <button type="button" style={{margin: '4px'}}>New Form</button>
        <button type="button" style={{margin: '4px'}}>Save</button>
        <button type="button" style={{margin: '4px'}}>Delete</button>
      </div>
      <form>
        <table style={{border:'solid', borderCollapse:'collapse', width:'100%'}}>
          <tbody>
            <tr>
              <th style={{border:'solid', padding:'8px', width:'20%'}}>Title</th>
              <td style={{border:'solid', padding:'8px'}}><input type="text" id="title" name="title" style={{width:'96%'}} /></td>
            </tr>
            <tr>
              <th style={{border:'solid', padding:'8px'}}>Content</th>
              <td style={{border:'solid', padding:'8px'}}><textarea id="content" name="content" style={{width:'96%'}} /></td>
            </tr>
          </tbody>
        </table>
      </form>

    </div>
  );
}

export default App;