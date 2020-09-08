import React, { Component } from 'react'
import {
    Header,
    Swiper,
    Tabs
} from '../../../../components'
import CommentView from '../CommentView'
import StoreBuy from '../StoreBuy'
import './style.less'
export default class DetailsDataView extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        const data = this.props.data
        return (
            <div className='details-view'>
                <Header title='详情页' />
                <Swiper banners={data.imgs} />
                <Tabs>
                    <tab tabname='房屋信息'>
                        <h1 className='title'>豪宅 · 使馆壹号院4居室-南</h1>
                        <div className='desc'>
                            <div className='desc-size'>
                                <ul>
                                    <li>
                                        <p className='active'>{data.price + '/月'}</p>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <p className='active'>{data.info.type}</p>
                                        <p>房型</p>
                                    </li>
                                    <li>
                                        <p className='active'>{data.houseType}</p>
                                        <p>面积</p>
                                    </li>

                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>楼层：{data.info.level}</p>
                                    <p>装修：{data.info.style}</p>
                                </div>
                                <div className="info-list">
                                    <p>类型：{data.info.type}</p>
                                    <p>朝向：{data.info.orientation}</p>
                                </div>
                                <div className="info-list">
                                    <p>年代：{data.info.years}</p>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab tabname='房屋评价'>
                        {
                            this.props.comments? <CommentView comments={this.props.comments} />
                            : <div>评价加载中</div>
                        }
                    </tab>
                </Tabs>
                <StoreBuy id={this.props.id} />
            </div>
        )
    }
}
