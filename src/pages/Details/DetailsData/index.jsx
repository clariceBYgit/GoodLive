import React, { Component } from 'react'
import api from '../../../api'
import DetailsDataView from './DetailsDataView'

export default class DetailsData extends Component {

    constructor(){
        super()
        this.state={
            dataList:{},
            comments:{},
        }
    }
    componentDidMount(){
        // 房屋信息
        api.details.dtailsData(this.props.id)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                dataList:data
            })
        })
        // 房屋评价
        api.comment.getCommentData(this.props.id,0)
        .then( res => res.json())
        .then( data=>{
            this.setState({
                comments:data
            })
        })
        
    }
   
    render() {
        return (
            <div>
              {
                  this.state.dataList.imgs && this.state.comments.data?
                  <DetailsDataView id={this.props.id} data={this.state.dataList} comments={this.state.comments} />
                  :
                  <div>
                      请等待
                  </div>
              }
             
            </div>
        )
    }
}
