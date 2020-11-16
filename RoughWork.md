<!-- # Rough Work -->

## Arithmetic Operations

**Theorem:** Wood represents the set of five binary arithmetic operations.

- The Wood operation represents the assembly of a set from components.
- In order for the Wood operation to continue in the same direction from beginning to end, without reversing directions, according to the state space of Wood --> Fire --> Earth --> Metal --> Water, this must be the order in which the set is constructed, which yields:

	1. (Wood, Fire) --> Earth
	2. (Earth, Earth) --> Metal
	3. (Metal, Metal) --> Water
	4. (Water, Water) --> Wood

- Therefore, the set built by adding all elements in the Wu Xing to the set is represented by Wood.

**Theorem:** Metal represents the sequence of the five binary arithmetic operations.

- The order in which the arithmetic operations on the complex number system are generated is, with increasing complexity:

	1. Addition --> Fire
	2. Additive inverse (subtraction) --> Water
	3. Repeated addition (multiplication) --> Earth
	4. Repeated addition inverse (division) --> Wood
	5. Repeated multiplication (exponentiation) --> Metal

- When all five elements are used exactly once to construct a sequence, the process is in parallel to the Wood sequence, where the elements of the sequence are appended to the sequence in the Wood-operation order, and Wood itself represents the sequence. As such, since the Metal operation is used to construct the above sequence, and all five elements are used exactly once, Metal must represent the sequence.

**Theorem:** Arithmetic operations are the first to be checked when determining which operation an element represents.

- Set(Water) --> Wood.
- Sequence(Water) --> Metal.
- Therefore, the arithmetic operations = Water.
- Because Water represents the first element in the causal chain (which ends at Earth), and represents the necessary and sufficient condition to continue to the next element in the causal chain, it must be the first to be checked, when determining which operation an element represents.	

## Set Operations

**Theorem:** Metal represents the set of the 4 "set operations".

- Using the same logic as the Theorem for the set of arithmetic operations:

	1. (XOR(Wood), intersect(Earth)) = Fire
	2. (Fire, union(Metal)) = Earth
	3. (Earth, complement(Water)) = Metal

- Therefore, the set of set-operations = Metal.

**Theorem:** Fire represents the sequence of the 4 "set operations".

- Again, like the arithmetic operations, the method to determine the order of appending the operations to the sequence is determined by the dependencies that each operation has on the other operations in its definition:

	1. Independent (intersect and XOR):
	
			intersect(Earth) && XOR(Wood) = Water
			
	2. One unknown (union): union(intersect, XOR) = union

			Water && union(Metal) = Earth

	3. One unknown (complement): intersect(union, complement-intersect) = XOR

			Earth && complement(Water) = Fire

- Therefore, Fire represents the sequence of [intersect, XOR, union, complement].

**Theorem:** Set operations are second to be checked when determining which operation an element represents.

- Set(Earth) --> Metal.
- Sequence(Earth) --> Fire.
- Therefore, the set operations = Earth.
- Using similar logic to that of the arithmetic operations (which represent Water), because Water is the necessary and sufficient condition for Earth, Earth must represent the second set of operations to be checked when determining which operation an element represents.

# Book 3

Basic facts:

- Order of particles are sequences.
- Mass of particles are sets.

Elements representing particles:

	5 quarks      = Earth --> why? (see Book 2)
	Top quark     = Earth
	5+1 quarks    = Earth
	Electron      =
	Muon          =
	Tau           =
	Electron-like =
	E Neutrino    =
	M Neutrino    =
	T Neutrino    =
	Neutrino-like =
	Matter p'cles =
	Force p'cles  =
	Higgs Boson   =

## Canonical Operations

When an element determined by the *Wu Xing derivation algorithm* represents an operation, there must be a method to determine which operation it represents.

### Order of Operations

<table>
<tr>
<th></th>
<th>Wood</th>
<th>Fire</th>
<th>Earth</th>
<th>Metal</th>
<th>Water</th>
</tr>
<tr>
<th>1. Binary Arithmetic</th>
<td>Division</td>
<td>Addition</td>
<td>Multiplication</td>
<td>Exponentiation</td>
<td>Subtraction</td>
</tr>
<tr>
<th>2. Set Operations</th>
<td>Symmetric Difference</td>
<td></td>
<td>Intersect</td>
<td>Union</td>
<td>Complement</td>
</tr>
</table>

1. Binary arithmetic operations
2. Set operations
3. Squared, square root, absolute value, negative
4. Functions: sum, integral, derivative
5. Max/min, average, element-of, round
6. Equals, le, not-e, lt
7. Inverse
8. Size, surface/boundary
9. Matrix multiplication, dot product, magnitude, direction, scalar multiplication, reversing a matrix multiplication from A*B to B*A, transposition
10. Infinitesimal, gradient

### Fire

#### Unary

	Max/min(collection{real-numbers | quantities})
		--> real-number/quantity

	Absolute-value([real-number | quantity])
		--> real-number/quantity

	Round([real-number | quantity])
		--> integer/quantity

#### Binary

	Addition([complex-number | vector], [complex-number | vector])
		--> complex-number/quantity/vector
		// Addition is defined on vectors.
		// Adding a scalar to a vector is not defined, because of their different dimensions.
		// In this case, a sequence is considered a vector of n dimensions, where n is the length of the sequence.

### Earth

#### Unary

	Squared(complex-number)
		--> complex-number

	Vector(object)/indexed-sequence(variable)
		--> vector/indexed-sequence
		// e.g. (x, y, z), (x1, x2, x3), or x_i

	Sum(collection{complex-numbers})
		--> complex-number

	Element-of(collection)
		--> object

1. Arithmetic

		Multiplication(complex-number, complex-number)
			--> complex-number

1. Set

		Intersect(set, set)
			--> set
			// e.g. subset: element.formula.values = element && formula && values



	Sequence([object | sequence], [object, sequence])
		--> sequence



### Water

#### Unary

	Size(object)
		--> real-number | quantity

## Formulas and Values

**Theorem:** When the algorithm is solving for a formula that has multiple inputs (e.g. `f(n = [0..4]) = [1,2,3,4,5]`), it is the values/output of the formula which must have the correct units.

**Theorem:** A formula is represented by Wood, and the values of this formula are represented by Earth.

1. Input = `(x, y, z)` = variables = Wood; e.g.  `(Fire,  Fire = [0..4], Metal) = [0..4] + 4`.
	- The input states (i.e. the last two input variables in the above example) can either be sets, values, or derived sets/values (an example of a derived value is  `Metal = Water + Fire`).
2. Output = `f(x, y, z)` = Earth;  e.g. `f(Fire, Water, Metal) = 5`.
3. Fire, the Wu Xing algorithm, represents `f`.

Finding a formula given values = Wood-operation(values). *(Finding a formula from values is an operation (the Wood operation) because the algorithm required to extract a single formula from multiple possible formulae is represented by an operation.)*

