class Polygon {
    constructor(sides){
       this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((total, side) => total + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const hasThreeSides = this.countSides === 3
        const sortedSides = this.sides.sort()
        const appropriateSideLength = (sortedSides[0] + sortedSides[1] > sortedSides[2])

        return hasThreeSides && appropriateSideLength
    }
}

class Square extends Polygon {
    get area(){
        const side = this.sides[0]
        return side**2
    }

    get isValid(){
        const hasFourSides = this.countSides === 4
        const side1 = this.sides[0]
        const side2 = this.sides[1]
        const side3 = this.sides[2]
        const side4 = this.sides[3]
        const hasEqualSideLength = (side1 === side2) && (side1 === side3) && (side1 === side4)

        return hasFourSides && hasEqualSideLength
    }
}