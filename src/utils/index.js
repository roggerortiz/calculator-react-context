export const OperatorEnum = {
   CLEAN: 'clean',
   BACKSPACE: '<-',
   PLUSMINUS: '+/-',
   PLUS: '+',
   MINUS: '-',
   MULTIPLY: '*',
   DIVIDE: '/',
   PERCENT: '%',
   EQUALS: '=',
}

export const NumberEnum = {
   ONE: '1',
   TWO: '2',
   THREE: '3',
   FOUR: '4',
   FIVE: '5',
   SIX: '6',
   SEVEN: '7',
   EIGHT: '8',
   NINE: '9',
   ZERO: '0',
   DECIMALDOT: '.',
}

export const ButtonEnum = {
   DOT: 'dot',
   NUMBER: 'number',
   OPERATOR: 'operator',
}

export const buttons = [
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.PERCENT, icon: 'percent' },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.CLEAN },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.BACKSPACE, icon: 'arrow-left' },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.DIVIDE, icon: 'divide' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.SEVEN, icon: '7' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.EIGHT, icon: '8' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.NINE, icon: '9' },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.MULTIPLY, icon: 'xmark' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.FOUR, icon: '4' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.FIVE, icon: '5' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.SIX, icon: '6' },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.MINUS, icon: 'minus' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.ONE, icon: '1' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.TWO, icon: '2' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.THREE, icon: '3' },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.PLUS, icon: 'plus' },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.PLUSMINUS, icon: 'plus-minus' },
   { type: ButtonEnum.NUMBER, value: NumberEnum.ZERO, icon: '0' },
   { type: ButtonEnum.DOT, value: NumberEnum.DECIMALDOT },
   { type: ButtonEnum.OPERATOR, value: OperatorEnum.EQUALS, icon: 'equals' },
]