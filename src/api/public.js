import fetch from '../utils/fetch';
//查询数据
export function selectValue(tableName, params) {
  let a = JSON.stringify(params)
  let data = {
    tableName: tableName,
    params: a
  }
  return fetch({
    url: "/api/selectValue",
    method: "get",
    params: data
  })
}
//添加数据
export function addValue(tableName, params) {
  // let params=JSON.stringify(params)
  let data = {
    tableName: tableName,
    params: params
  }
  return fetch({
    url: '/api/addValue',
    method: 'post',
    params: data
  });
}

//删除数据
export function deleteValue(tableName, params) {
  let a = JSON.stringify(params)
  let data = {
    tableName: tableName,
    params: a
  }
  return fetch({
    url: '/api/deleteValue',
    method: 'post',
    params: data
  });
}

//更新数据
export function updateValue(tableName, params, newData) {
  let a = JSON.stringify(params)
  let data = {
    tableName: tableName,
    params: a,
    newData
  }
  return fetch({
    url: "/api/updateValue",
    method: "post",
    params: data
  })
}
export function getValue(ciKey, parameterList, page, pageSize, sortList) {
  if (parameterList.length < 1) parameterList = [];
  const data = {
    page: page,
    pageSize: pageSize,
    ciKey,
    sortList,
    paraList: parameterList
  };
  return fetch({
    url: "/apj/publicController/getValueByApp/" + ciKey,
    method: "post",
    data
  });
}
