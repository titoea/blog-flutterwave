import { formatDistanceToNowStrict } from 'date-fns'

function getTimeAgo(date){
    if(date){
        return formatDistanceToNowStrict(new Date(date))
    }
}

export{
    getTimeAgo
}