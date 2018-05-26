//-------------IMPORT BASIC OBJECTS AS PLACEHOLDERS FOR DB STRUCTURE----------------------
import axios from 'axios';
import Promise from 'bluebird';
import zoteroLib from '../data/landscape-studies.json'; //need to do a call for tags or other


//-------------------CONSTANTS

export const GET_RESOURCES = 'GET_RESOURCES';

export const GET_SUB_RESOURCES = 'GET_SUB_RESOURCES';
// export const GET_CHP_RESOURCES = 'GET_CHP_RESOURCES';
// export const GET_SITE_RESOURCES = 'GET_SITE_RESOURCES';
// export const GET_AGENT_RESOURCES = 'GET_AGENT_RESOURCES';

export const SORT_RESOURCES = 'SORT_RESOURCES';

export const GET_ACTIVE = 'GET_ACTIVE';
export const GET_ACTIVE_ID = 'GET_ACTIVE_ID';
export const GET_ACTIVE_TYPE = 'GET_ACTIVE_TYPE';

export const GET_TAGS = 'GET_TAGS';


//-------------------ACTION CREATORS - vanilla loading of information
export const getResources = (resources) => {
	return {
		type: GET_RESOURCES,
		resources: resources
	};
};

export const getSubResources = (resources) => {
	return {
		type: GET_SUB_RESOURCES,
		resourcesSelect: resources
	};
};

/*export const getChpResources = (resources) => {
	return {
		type: GET_CHP_RESOURCES,
		resourcesSelect: resources
	};
};

export const getSiteResources = (resources) => {
	return {
		type: GET_SITE_RESOURCES,
		resourcesSelect: resources
	};
};

export const getAgentResources = (resources) => {
	return {
		type: GET_AGENT_RESOURCES,
		resourcesSelect: resources
	};
};*/

export const sortResources = (resources) => {
	return {
		type: SORT_RESOURCES,
		resourcesSelect: resources
	};
};

export const getActiveID = (resourceId) => {
	return {
		type: GET_ACTIVE_ID,
		resourceId
	};
};

export const getActiveType = (resourceType) => {
	return {
		type: GET_ACTIVE_TYPE,
		resourceType
	};
};

export const getActive = (resourceActive) => {
	return {
		type: GET_ACTIVE,
		resourceActive
	};
};

export const getTags = (tags) => {
	return {
		type: GET_TAGS,
		tags
	};
};




//note: the tabs for logging in to the system and editing materials will be their own additions to the user reducer

//-------------------reducers && initial info

const initMap = {
	resources: [],

	resourcesSelect: [],

	resourceId: null,
	resourceType: null,
	resourceActive: {},

	tagsAll:[],
	tagsActive:[],
};



export const searchReducer = (prevState = initMap, action) => {
	let newState = Object.assign({}, prevState);

	switch(action.type){

	case GET_RESOURCES:
		newState.resources = action.resources;
		break;

	case GET_SUB_RESOURCES:
		newState.resourcesSelect = action.resourcesSelect;
		break;

	case SORT_RESOURCES:
		newState.resourcesSelect = action.resourcesSelect;
		break;

	case GET_ACTIVE_ID:
		newState.resourceId = action.resourceId;
		break;

	case GET_ACTIVE_TYPE:
		newState.resourceType = action.resourceType;
		break;

	case GET_ACTIVE:
		newState.resourceActive = action.resourceActive;
		break;

	case GET_TAGS:
		newState.tagsAll = action.tags;
		break;

	default:
		return prevState;
	}

	return newState;

};


/* ------------       DISPATCHERS     ------------------ */

export const loadTags = () => dispatch => {
	axios.get('https://api.zotero.org/groups/2144277/tags') // add limit structure
	.then(res=>{
		//console.log(res.data);
		dispatch(getTags(res.data));
	})
	.catch(console.log);
}

export const loadResources = (type,id) => dispatch => {
	var limit = 100;

	if (type===null){
		var calls=[];
		var res = [];

		axios.get('https://api.zotero.org/groups/2144277/items/top?itemType=book&limit='+limit)
			.then(result=>{
				res = result.data;
				console.log('zotero, top-level first call', res);
				var resFinal = (result.headers.link)? result.headers.link.split(',').filter(item=>item.includes('rel="last"'))[0].split(';')[0] : null ;
				var last = (resFinal)? +resFinal.match(/start=\d*/g)[0].replace('start=',''): null ;
				var start=limit;

				while (start<=last){
					resFinal=resFinal.replace(/start=\d*/g, 'start='+start).replace(/<|>/g, '');
					start+=limit;
					calls.push(axios.get(resFinal));
				}

				Promise.all(calls)
				.then(resAll=>{
					resAll.forEach(item=>res=res.concat(item.data));
					res = res.map(item=>{item.data.contrib = item.meta.createdByUser; return item.data });
					console.log('zotero, top-level items', res);
					dispatch(getResources(res));
				})
			})
			.catch(console.log);
	}

	if (type !== null && id > -1){ //set for chapter currently; chp and #


	}
};

export const sortSelResources = (res,type,secondary) => dispatch => { // by tags, date, author, site... then nothing, alphabet, date


};

export const loadActiveResources = (res,id,type) => dispatch => { // by tags, date, author, site... then nothing, alphabet, date
//here is here the alternate api interactions will go for the secondary call


};


const getHathi = ()=>{

};

const getNYPL = ()=>{

};

// re-write about in terms of object with protocols
const resApi = {
	Hathi: {
		//procotol variables in here
	},
	NYPL: {
		//procotol variables in here
	},
	BNF: {
		//procotol variables in here
	},
	Etc: {
		//procotol variables in here
	}
};




//OLDER ZOTERO QUERY, doesn't work with file limits
	//const allRes = axios.get('http://api.zotero.org/groups/2144277/items?limit=500')
	/*const allRes = axios.get('http://api.zotero.org/groups/2144277/items?itemType=-attachment')
			.then(responses => {
				return responses.data;
			})
			.then((results) => {
				// var noteAtt = [];
				// var resParents=results.filter(item=>{
				// 	if (item.data.type === 'note' && item.data.type==='attachment') {noteAtt.push(item)};
				// 	return item.data.type !== 'note' && item.data.type !=='attachment';
	   //  	});
	    	console.log('axios to zotero', results);

			//dispatch(getAllTours(tours));
		})
		.catch(console.log);*/

// export const setCoreText = () => dispatch => {
// 	Promise.all(sampleText())
//   .then(res => {
//   	dispatch(setText(res))
//   })
//   .catch(err => console.error('Problem fetching current user', err));
// };

// export const setChpPara = (chpId, paraId) => dispatch => {
//   dispatch(setChapter(chpId));
//   dispatch(setPara(paraId));
// };

// export const setChpParaL = (paraId) => dispatch => {
//   dispatch(setParaL(paraId));
// };

// export const setSiteData = (id, name) => dispatch => {
//   dispatch(setSiteId(id));
//   dispatch(setSiteName(name));
// };

// export const setUpdate = (bool) => dispatch =>{
// 	console.log('in process', !bool)
// 	dispatch(setUp(bool));
// }
