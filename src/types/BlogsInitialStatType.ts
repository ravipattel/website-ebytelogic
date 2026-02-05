
export interface BlogsInitialStatType{
    loading:string,
    message:string,
    error:boolean,
    apiName:string,
    alertType:''|'info'|'success'|'danger'|'warning',
    blogs:any[],
    blog:any[]
}