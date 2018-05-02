import Vue from 'vue'
import Router from 'vue-router'

import IndexContent from '../pages/index-content'
import Service from '../pages/service'
import Consult from '../pages/consult'
import Activity from '../pages/activity'
import ActivityDetail from '../pages/activity-detail'
import About from '../pages/about'
import About1 from '../components/about1'
import About2 from '../components/about2'
import About3 from '../components/about3'
import ServiceDetail from '../pages/service-detail'
import ConsultList1 from '../pages/consult-list1'
import ConsultList1Detail from '../pages/consult-list1-detail'
import ConsultList2 from '../pages/consult-list2'
import ConsultList2Detail from '../pages/consult-list2-detail'
import ConsultList3 from '../pages/consult-list3'
import ConsultList3Detail from '../pages/consult-list3-detail'
import FindPass from '../pages/find-pass'
import MessageLogin from '../pages/message-login'
import AccountLogin from '../pages/account-login'
import Personal from '../pages/personal'
import Publish1 from '../pages/publish1'
import Publish2 from '../pages/publish2'
import PersonalNav1 from '../components/personal-nav1'
import PersonalNav2 from '../components/personal-nav2'
import PersonalNav3 from '../components/personal-nav3'
import PersonalNav4 from '../components/personal-nav4'
import PersonalNav5 from '../components/personal-nav5'
import PersonalNav6 from '../components/personal-nav6'
import PersonalNav7 from '../components/personal-nav7'
import PersonalNav8 from '../components/personal-nav8'
import PersonalNav9 from '../components/personal-nav9'
import IndexPart1 from '../components/index-part1'
import IndexPart2 from '../components/index-part2'
import IndexPart3 from '../components/index-part3'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index-content'
    },
    {
    	path: '/index-content',
      component: IndexContent,
      redirect:'/index-content/index-part1',
      children:[
      	{
      		path:'index-part1',
      		component:IndexPart1
      	},
      	{
      		path:'index-part2',
      		component:IndexPart2
      	},
      	{
      		path:'index-part3',
      		component:IndexPart3
      	}
      ]
    }, 
    {
    	path: '/service',
      component: Service
    },
    {
    	path: '/publish1',
      component: Publish1
    },
    {
    	path: '/publish2',
      component: Publish2
    },
    {
  		path:'/service-detail',
  		component:ServiceDetail
  	},
    {
    	path:'/consult',
    	component:Consult
    },
    {
    	path:'/consult-list1',
    	component:ConsultList1
    },
    {
    	path:'/consult-list1-detail',
    	component:ConsultList1Detail
    },
    {
    	path:'/consult-list2',
    	component:ConsultList2
    },
    {
    	path:'/consult-list2-detail',
    	component:ConsultList2Detail
    },
    {
    	path:'/consult-list3',
    	component:ConsultList3
    },
    {
    	path:'/consult-list3-detail',
    	component:ConsultList3Detail
    },
    {
    	path:'/activity',
    	component:Activity
    },
    {
    	path:'/activity-detail',
    	component:ActivityDetail
    },
    {
    	path:'/find-pass',
    	component:FindPass
    },
    {
    	path:'/message-login',
    	component:MessageLogin
    },
    {
    	path:'/account-login',
    	component:AccountLogin
    },
    {
    	path:'/personal',
    	component:Personal,
    	redirect:'/personal/personal-nav1',
    	children:[
    		{
    			path:'personal-nav1',
    			component:PersonalNav1
    		},
    		{
    			path:'personal-nav2',
    			component:PersonalNav2
    		},
    		{
    			path:'personal-nav3',
    			component:PersonalNav3
    		},
    		{
    			path:'personal-nav4',
    			component:PersonalNav4
    		},
    		{
    			path:'personal-nav5',
    			component:PersonalNav5
    		},
    		{
    			path:'personal-nav6',
    			component:PersonalNav6
    		},
    		{
    			path:'personal-nav7',
    			component:PersonalNav7
    		},
    		{
    			path:'personal-nav8',
    			component:PersonalNav8
    		},
    		{
    			path:'personal-nav9',
    			component:PersonalNav9
    		}
    	]
    },
    {
    	path:'/about',
    	component:About,
    	redirect:'/about/about1',
    	children:[
    		{
		    	path:'about1',
		    	component:About1
		    },
		    {
		    	path:'about2',
		    	component:About2
		    },
		    {
		    	path:'about3',
		    	component:About3
		    }
    	]
    }
    
  ]
})
