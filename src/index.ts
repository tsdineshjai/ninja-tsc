interface HasId {
	id: number;
}
class Players<T extends HasId> {
	constructor(private data: T[]) {}

	logTheData(): T[] {
		return this.data;
	}

	filterOne(id: number): T[] {
		return this.data.filter((item: T) => item.id !== id);
	}
}

interface Player {
	name: string;
	position: string;
	id: number;
}

const forwards = new Players<Player>([
	{ name: "chid", position: "forward", id: 23 },
	{ name: "nwaneri", position: "midfield", id: 33 },
]);

console.log(forwards.logTheData());
