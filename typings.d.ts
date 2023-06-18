interface Overview {
	id: number
	website: string
	metric: string
	count: string
	summary: string
}

interface Follower extends Overview {
	handle: string
}
