import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
<div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">Navbar</a>
    <div className="form-control">
        <Search />
    </div>
</div>
    )
  }
}
