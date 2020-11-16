<style>
	.ref {
		color: green;
		font-size: large;
		font-weight: bold;
	}
	.todo {
		color: red;
	}
	.done {
		color: purple;
	}
	.expr {
		color: blue;
		font-size: large;
		font-weight: bold;
	}
</style>

# CHANGELOG

- 2020-Nov-04: notebooks scanned; 0.0.0 started
- 2020-Nov-12: 0.0.0 finished

# TODO

- CONSISTENCY: When to use element-of and in which direction to match units (esp. re: formula.values.units)
- When ASSERTING equality of units, what is the datatype we compare?

# Theorems

THEOREM: Fire represents the domain of a function.

- A function f is represented by Fire.
- In order to chain functions together such that the output (co-domain) of one function becomes the input (domain) of another function, and in order for both inputs to be represented by the same element (i.e. the element that represents a domain), the only element which can represent the domain is Fire, because Fire(domain) -> f(Fire) -> Fire(co-domain/domain).

THEOREM: Formula = Wood; values = Earth.

- Let a formula be derived from values using deductive reasoning.
- Then, Metal(values) = formula.
- Let values = f(formula).
- Then, the only way to satisfy both conditions is if values = Earth, and formula = Wood.
- formula.values uses the property accessor method (formula-element && values(Earth)) and Formula.fromValues(values) uses the operation method (Wood-op(Values element)) because it is a function (i.e. it uses the "deductive reasoning" algorithm).
- Compare this theorem with element-of (Earth op) vs. set-of (Wood op).

THEOREM: In order to perform and OPERAND SELECT when operands a and b must have the same units, set a && b = a + b.

- The result of units(a && b) is defined iff a and b have units in common.
- The result of units(a + b) is defined iff a and b have units in common.
- units(a) = units(b) iff units(a && b) = units(a + b).

THEOREM

- sequence -> formula -> Metal(i)
- formula.values = Water
- elof Metal(i) = Water
- Therefore, data type of values = elof sequence_i.

# Computing Quark Masses

## Quark Masses, Excluding the Top Quark Mass

### Dependencies

- 5-quarks (6 quarks, excluding the top quark) = Earth. (1)
- Is (1) true by virtue of "planets = Fire"?
- Which planets and which quarks are represented by which elements.
- "Gaussian curve scaled such that gc(2) = 1" = Wood.
- {0..4} = Fire.

### Computation

<span class="expr">1. Values of masses of 5 quarks = Water[1]</span>

- (5-quarks).mass = 5-quarks(Earth) &&(Earth op) mass(Wood) = <span class="ref">Water[1]</span>.
- Therefore, **(values of masses of 5 quarks = Water[1])**.

---

<span class="expr">2. 5-quark mass formula = Wood[2]</span>

- There is one quark mass output for each planet input.
- There are 5 of these inputs/outputs.
- The quark mass values are represented by a single element, and this element represents multiple values.
- Whenever the result represents multiple values, the solution to the Elemental Math algorithm will be the formula which evaluates to these values. This formula will have as many inputs as there are values for outputs.
- Formula(Wood op) of-quark-mass-values(Water[1]) = <span class="ref">Wood[2]</span>.
- Therefore, **(quark mass formula = Wood[2])**
- Furthermore, domain(Fire) -> formula(Wood) -> values(Water).

1.  INFERRED:
    - Water = f(Planets).
---

<span class="expr">3. Wood[3] = Fire[4] + Metal[5]</span>

1.	OPERATION SELECT:
	- ASSERT: Wood has units of MeV/c^2.
    - quark-masses(Water[1]) -> <span class="ref">Fire[3]</span> -> has-units-of-MeV/c^2(Metal)
	- Therefore, **(Wood[2] = Fire[3](a, b?))**.
	- <span class="todo done">TODO: Check which Fire operation = Fire[3].</span>
		- Wood(Water) = Wood (i.e. values = Water).
		- Water = f(Metal) = f(x, y), therefore, the operation is binary.
		- The only binary Fire operation which maps number -> number is "+".
		- Therefore, Fire[3] = "+".
	- Therefore, **(Fire[3] = "+")**.
	- Therefore, **(Wood[2] = a + b)**.

2.	OPERAND SELECT:
	- a and b must have the same units (namely, MeV/c^2), therefore a && b = a + b.
	- Therefore, **(Wood[2] = <span class="ref">Fire[4]</span> + <span class="ref">Metal[5]</span>)**.

3.  INFERRED:
    - Fire[4] has units of MeV/c^2.
    - Metal[5] has units of MeV/c^2.

---

<span class="expr">4. Metal[5] = Fire[7] * Water[8]</span>

1.	OPERATION SELECT:
    - ASSERT: units(Metal[5]) = MeV/c^2. (**TRUE**)
	- ASSERT: Metal[5] = f(planets).
    - planets(Fire) -> <span class="ref">Earth[6]</span> -> Metal[5].
	- Therefore, **(Metal[5] = Earth[6](a, b?))**.
	- <span class="todo done">TODO: Check which Earth operation = Earth[6].</span>
		- Sequence-of(Earth op) Water = Metal[5].
		- Water = f(x,y).
		- The only binary Earth operation which maps number -> number = "*".
	- Therefore, **(Earth[6] = "*")**.
	- Therefore, **(Metal[5] = a * b)**.

2. OPERAND SELECT:
	- Either a or b must be Water.
    - Water -> Fire op -> Metal[5].
	- Therefore, **(Metal[5] = <span class="ref">Fire[7]</span> * <span class="ref">Water[8]</span>)**.

3. NOTES:
	- This is standard procedure for determining the operands of multiplication operations when there are no additional conditions on the whole expression.

---

<span class="expr">5. Metal[5] = f(Earth[9])</span>

- Question: what does Metal depend on?

1. OPERATION SELECT:
	- ATTEMPT: EOF:
        - Let Metal * x = (y = Fire or Water) such that Metal -> x -> y or x -> Metal -> y (1).
	    - (1) holds for x = Earth and y = Fire, such that Metal * Earth = Fire.
	    - However, the whole expression Water * Metal * Earth = (Water * Earth) * Metal = Wood.
	    - Since Wood =/= Metal, (1) does not work.
	- ASSERT: units(Metal[5]) = MeV/c^2.
	- Because the Earth op is used to construct a sequence from elements, the Wood op extracts elements from a sequence.
	- f(N) = Metal. Wood-op(Earth(sequence)) = Metal. Therefore, the Wood-op transforms a sequence into f(N), and the simplest such function where the sequence is fully represented (each member of the sequence has an associated input) is the look-up function. As a function of a sequence, f(N) retains its status as a sequence.
	- x_i(Wood op) Fire[7] = Earth. (i(Wood) = i(Wood))(Water) -> Earth -> Wood.
	- y_i(Wood op) Water[8] = Wood. Water -> Wood -> Fire.
	- x(i)(Wood) * y(i)(Fire) = Water_i.
	- elof Water_i = Wood.
	- Wood(that which has effective units) -> Water -> Metal(that which has target units)
	- Therefore, **(Metal[5] = f(Water op))**.
	- <span class="todo done">(TODO: Water op = size op (radius, specifically))</span>
		- Based on the EOF, the goal is to map the planets to quantities in as few operations as possible.
		- There is a single Water operation which maps objects -> numbers: the "size-of" operation.
		- Because water represents a distance given by x - y (i.e. the length of a straight line segment), the simplest linear measure of size of a spheroid is "average radius".
		- Therefore, Water op = "average radius of".

2. OPERAND SELECT:
	- The radius-of operation applies to the elements of the planets-set/sequence(Fire).
	- Radius-of elements-of planets(Fire) = <span class="ref">Earth[9]</span>; 

---

<span class="expr">6. Water[8] = (planets.elements.radiusKm ^ 3).set</span>

1. OPERATION SELECT:
	- Set-of Earth[9] = Metal (so the computation is from set to set)
	- Metal-set -> Metal-op -> Metal-set[5]
	- Therefore, **(Water-set or Fire-set = f(Metal op))**.
	- <span class="todo done">(TODO: why exponentiation?)</span>
		- Element-of(Earth op) Water-set = Metal.
		- Metal = f(x,y).
		- Therefore, if the Water-set is the result, Water[8] = a ^ b.
		- Element-of(Earth op) Fire-set = Wood.
		- Wood = f(x).
		- Since there is no unary Metal operation which maps number -> number, and since transforming a set into a number requires additional steps, the Fire-set cannot be the result.
		- Therefore, Water[8] = a ^ b.

2. OPERAND SELECT:
	- Radius and exponentiation are used to yield Water-set.
	- Earth[9]^3 = Metal, such that set-of Metal = Water. **VALID**
	<!-- 2. CASE B: Radius and exponentiation are used to yield Fire-set.
		- Earth[9]^x = Wood, such that set-of Wood = Fire
		- Earth[9]^Earth = Wood, but this would be Earth[9]^2, which violates EOF, because this could be easier expressed as a unary operation. **INVALID**
		- Earth[9]^7 = Wood also works, but an extra step is required (2 + 5 = 7). **INVALID**
	- Therefore, **(Water[8] = set-of(Wood-op) [radius-of(Water op) elements-of(Earth op) planets(Fire)]^3)**.
	-->
3. UNIT SELECT:
	- units-of(Earth op) Metal = Earth.
	- There is no units x for which x ^(Metal op) 3(Wood) = Earth.
	- Therefore, the only way to cube x is to represent it as x * x * x.
	- Therefore, x = Water.
	- The units of distance represented by Water is kilometers (km).
	- Therefore, **(Metal has units of km^3)**.

---

<span class="expr">7. Fire[7] = gaussianCurve(Fire[10])</span>

1. OPERATION SELECT:
	- x_i(Wood op) Fire[7] = Earth. elof(Wood op) x_i = Metal.
	- Therefore Metal represents that which has effective units.
	- MeV/c^2(Earth) /(Wood op) km^3(Earth) = Metal(target units).
	- Therefore, Water is that which has target units.
	- Metal(that which has effective units) -> Fire -> Water(that which has target units)
	- Therefore, **(Fire[7] = Fire(a, b?))**.
	- Fire must be given the necessary units, $$\frac{MeV/c^2}{km^3},$$ in the minimum number of steps (conforming to the EOF).
	- Because standard operations would require a minimum of two property-getting steps to yield these measurable quantities (since the operations required to yield derived quantities such as density still count as operations for the purpose of the EOF), if there is a Fire function which yields the required units from input in a single step, this function is given priority as the Fire operation which yields Fire[7].
	- units-of(Earth op) elements-of(Earth op) Fire[7] = (MeV/c^2 / km^3)(Water) iff [7] is Fire.
	- units-of(Earth op) Fire.function(Fire && Fire = Wood) = Water. In other words, if [7] is Fire, then Water represents the units of the Fire function.
	- [7] is Fire, therefore Water represents the units of the Fire function, and Water represents MeV/c^2 / km^3. Therefore the units of the Fire function must be MeV/c^2 / km^3.
	- The Gaussian curve is the only function which is represented by Wood. In other words, all functions represented by Wood are the Gaussian curve.

2. OPERAND SELECT:
	- <span class="ref">Fire[10]</span> -> gaussian-curve(Fire) -> Fire[7]
	- Therefore, **(Fire[7] = Gaussian-curve(Fire)(Fire[10]))** with units of MeV/c^2 / km^3.

---

<span class="expr">8. Fire[10] = Earth[12] + Water[13]</span>

1. OPERATION SELECT:
	- Fire[10] is dependent on the 5 planets.
	- Since there is no requirement for Fire[10] to have units, the EOF states that it must not have units.
	- The simplest representation without units of the 5 planets is the index representation, and the simplest index representation (by the EOF) is {0..4}.
	- The index sequence {0..4} is represented by Fire.
	- The index sequence must be transformed into a function domain, so we cannot use the raw index sequence value.
	- {0..4}(<span class="ref">Fire[11]</span>) -> operation(Fire) -> result(Fire[10])
	- Therefore, **(Fire[10] = Fire(a, b?))**.
	- <span class="todo done">(TODO: why addition?)</span>
		- The type that the Fire operation is being performed on is: element-of(Earth op) Fire[10].function(Fire).domain(Fire) = Metal.
		- Metal = f(x,y).
		- Addition is the only binary Fire operation which maps number -> number.
		- Therefore, Fire[10] = a + b.

2. OPERAND SELECT:
	- a and b must have the same units in order to be added together, therefore a && b = a + b.
	- Therefore, **(Fire[10] = <span class="ref">Earth[12]</span> + <span class="ref">Water[13]</span>)**.

---

<span class="expr">9. Water[13] = {1,1,1,1,1}</span>

1. OPERATION SELECT:
	- The {0..4}(Fire[11]) domain must transform into Water.function(Fire).domain(Fire).
	- Water && Fire && Fire = Wood.
	- {0..4}(Fire[11]) -> Metal op -> Wood.
	- Therefore, **(Water = Metal(a, b?))**.
	- <span class="todo done">TODO: Why exponentiation?</span>
		- (Earth op) Water.fire.fire = Water.
		- Water = f(x,y).
		- Therefore, Water = a ^ b.

2. OPERAND SELECT:
	- Because the Metal transformation transforms {0..4}(Fire) -> Metal op -> Water, the first operand (the thing being transformed) must be {0..4}(Fire).
	- Metal(Fire, x) = Water iff x = Fire.
	- The EOF states that the simplest valid expression for x(Fire) is the correct one, therefore x(Fire) = 0.
	- Therefore, **(Water = {0..4}^0 = {1,1,1,1,1})**.

---

<span class="expr">10. Earth[12] = {0, 0.25, 0.5, 0.75, 1}</span>

1. OPERATION SELECT:
	- The {0..4}(Fire[11]) domain must transform into Earth.function(Fire).domain(Fire).
	- Earth && Fire && Fire = Water.
	- {0..4}(Fire[11]) -> Wood op -> Water.
	- Therefore, **(Earth = Wood(a, b?))**.
	- <span class="todo done">TODO: Why division?</span>
		- (Earth op) Earth.fire.fire = Metal.
		- Metal = f(x,y).
		- Therefore, Earth = a / b.

2. OPERAND SELECT:
	- Because the Wood transformation transforms {0..4}(Fire) -> Wood op -> Earth, the first operand (the thing being transformed) must be {0..4}(Fire).
	- Wood(Fire, x) = Earth if x = Fire, x = Water, or x = Metal.
	- If x = Fire = 0, then there is division by 0, leading to infinity as the result for each element of the domain. Since 1 would be added to infinity for each element, this nullifies the effect of the Water operand in the addition operation, thereby violating the economy of form (EOF).
	- If x = Water = 1, then y/1 = y, and the operation results in no changes to the first operand, thereby violating the EOF.
	- If x = Metal, the {0..4}/4 = {0, 0.25, 0.5, 0.75, 1}, which is a valid result.
	- Therefore, **(Earth = {0..4}/4 = {0, 0.25, 0.5, 0.75, 1})**.
	- Also, **(Fire[10] = {1, 1.25, 1.5, 1.75, 2})**.

---

$r_n^3 \times g(x_n)$ where $x_n = [1, 1.25, 1.5, 1.75, 2]$

---

<span class="expr">Fire[4] = Water[14] * Wood[15] * Metal[16]</span>

1.  OPERATION SELECT:
    - ASSERT: Fire = f(planets). (**TRUE**)
    - ASSERT: units(Fire) = MeV/c^2.
    - Fire() -> Earth -> Metal(that which has target units)
- Therefore, Fire = Water * Earth
- Either Water or Earth must include a Metal factor, in order for Fire to have the correct units in the minimum number of steps (i.e. following EOF).
- Since Metal * x = Water is not possible for any x, Earth = Metal * x must be used.
- Since Metal -> Wood -> Earth, Earth = Wood * Metal. 
- Since the whole expression Water * Wood * Metal = (Metal * Wood) * Water = Fire, this expression holds. [_]

---

<span class="expr">Water[14] = sqrt(Metal[17])</span>

- ASSERT: Water = f(planets).
- Planets(Fire) -> Wood -> result(Water)
- Sequence-of(Earth op) Wood = Water; Wood = f(g(x)) = h(x) (c.f. Metal = h(x,y))
- The only unary Wood operation which maps number -> number = sqrt(x)
- Therefore, Water = sqrt(Metal) [_]

---

<span class="expr">Metal[17] = Earth[18] / Wood[19]</span>

- ASSERT: Metal has no units.
- Because Water doesn't need to have units, the EOF states that it has no units.
- The only way to ensure that Water has no units is if Water = sqrt(Metal) = sqrt(a/b) where units(a) = units(b).
- The above equation holds true for:
	- (1) a = Earth, b = Wood, and
	- (2) a = Earth, b = Water.
- However, Earth -> Wood -> Metal, whereas Earth -> Water -> Fire.
- Therefore, Metal = Earth / Wood

---

<span class="expr">Water[14] = f(Metal-op[20])</span>

- ASSERT: Water has no units.
    - Just because Metal has no units doesn't mean Water has no units. E.g. sqrt(x) kg. 
- No-units = no(Water op) units(Earth) = Water
- units(Metal) = units = Earth. Therefore that which has units is Metal.
- Let Metal have units of x = Earth.
- x(Earth) / x(Earth) = Metal = no units.
- units(Water) = Metal = no units.
- Therefore, Water is that which has no units.
- Limit scope to Water: the question is "what does Water depend on?"
- Water has no units by virtue of the division operation Earth / Wood, therefore, in order to force Water to have no units, we must include everything up to this division operation.
- i = i = i: Metal = domain (three i's because of the second operation: sqrt(z_i)
- Earth_i = Metal. Wood_i = Fire.
- Metal -> Metal -> Metal.
- Metal -> Fire -> Water.
- Metal / Water = Wood.
- sqrt(Wood) = Fire.
- elof Fire = Earth (that which has effective units).
- Earth(that which has effective units) -> Metal op -> Water(that which has no units = target units)
- Therefore, Metal = f(Metal op) [_]

---

<span class="expr">Metal-op[20] = masses of moons of nth planet</span>

- ASSERT: combination of:
    - Water = f(Metal op)
    - Water = f(planets)
- Since the Metal op doesn't define a operation which maps object -> quantity, the next simplest way to map object -> quantity is by accessing a property of that object
- The property accessor method is the Earth op.
- Since planets(Fire) &&(Earth op) Water = Metal, this should be tried first. Water has no property associated with it, however. Therefore, Water must be the object of object.property. The simplest derivative object of planets(Fire) that = Water is moons-of(Metal op) planets(Fire) = Water. Therefore, Water = moons of planets.
- (Fire || Wood || Water) && Water = Metal. Of these, only Wood has a property of an object associated with which maps to a quantity (mass).
- Therefore, the Metal operation is the operation which yields the mass property of the moon objects of the planet operand. [_]

---

<span class="expr">Earth[18] = Metal[21] + Wood[22]</span>

- ASSERT: units(Earth) = units(Wood) = kg
- Earth = mass(Wood) && Metal. Metal = moon(s)-of(Metal op) Wood(Jupiter). Since Jupiter has neither 5 nor 1 moon, and since the Earth result must be either a sequence of 5 or a scalar, Earth =/= mass && Metal.
- Therefore, Earth must be the result of an operation.
- Earth_i = Metal. Wood_i = Fire. i=i -> Water. Water -> Metal -> Earth. Water -> Fire -> Metal. x_i(Earth) && y_i(Metal) = Fire. elof Fire = Earth(that which has effective units).
- Target units = units(mass(Wood)) = Water. What which has target units = Wood.
- Earth(that which has effective units) -> Fire -> Wood(that which has target units). Therefore, Earth = Fire(a, b?).
- Sequence-of(Earth op) Metal = Earth. Metal = f(x,y). The only binary Metal operation which maps number -> number is "+". Therefore, Earth = a + b.
- a and b must have the same units, therefore Earth = Metal + Wood. [_]

---

<span class="expr">Metal[21] = max(masses of moons of nth planet)</span>

- ASSERT: EOF.
- Max is the only Fire function which maps collection -> number.
- Therefore, by the EOF, Metal = Max(Metal). This automatically forms a sequence.
- If Metal is not a function of N, which is the case if Metal is a constant and the EOF applies, then the EOF states that Metal must be forced into a sequence (i.e. the reverse of the elements-of operation would be used). This requires an additional step, thereby being less efficient in terms of the EOF.
- Therefore, the Metal of max(Metal) is unique for each planet, and does not represent a constant (the max of the masses of the moons of a single planet).

---

<span class="expr">Wood[22] = avg(Earth[23])</span>

- ASSERT: units(elof(Wood)) = kg.
- That which has units of kg = Wood.
- elof Wood = Fire(that which has effective units)
- Fire(that which has effective units) -> Metal op -> Wood(that which has target units).
- Therefore, Wood = Metal(a, b?).
- The only Metal operation which maps collection -> number is the "average" operation.
- Therefore, Wood = average(Earth). [_]

---

<span class="expr">Earth[23] = Metal[24] && Wood[25]</span>

- Prove: Earth = Metal && not(max(Metal))
- ASSERT: Earth = f(masses of moons of planets).
- Since there is no operation which maps a sequence of sets to a flat set, Earth, as a function of a sequence (Metal = masses of moons of planets), must also be a sequence.
- elof Metal_i (Wood) -> Earth op -> elof Earth_i (Water)
- The only Earth operation which maps set -> set is the intersection(&&) operation.
- units-of elements-of each collection must be the same.
- Therefore, Earth = Metal && Wood.

---

<span class="expr">Metal[24] = masses of moons of nth planet</span>

- Because of EOF, Metal (because it can be) must be masses-of moons-of planets.

---

<span class="expr">Wood[25] = not(Metal[26])</span>

- Wood is already a set (it must be to be an operand of the && operation), and Metal is a set.
- Metal -> Water op -> Wood.
- The only Water operation which results in a set is the "not" operation.
- Therefore, Wood = not(Metal).

---

<span class="expr">Metal[26] = max(masses of moons of nth planet)</span>

- Since x && not-x is the null set, and taking the average of the null set is impossible, the EOF states that the transition from Metal -> Metal is given by Fire-op(Metal).
- The only Fire operation which maps set-x -> subset-of-x is the "max" operation.
- Therefore, Metal = max(masses of moons of nth planet.

---

<span class="expr">Wood[19] = Mass of Earth's moon</span>

- Prove: Wood denominator
- ASSERT: units(Wood) = kg (**DONE ALREADY**)
- Because the value technique (EOF) cannot be used when the
- The way to ensure that the Wood sequence has the correct number of elements is by taking the sequence to be a formula, and extracting its values. With el-of-sequence <-> sequence-of-el, it must be possible to construct a new sequence from the elements of another sequence, implying that the operation is not reversible (doesn't automatically reconstruct the original sequence). On the other hand, each formula follows the EOF based on the conditions used to construct the formula, and so is unique for each element and a given set of conditions. Therefore, when WoodFormula.values = Water, and Formula.fromValues(Water) = Wood, the process is reversible. Therefore, if the Wood formula contains information about the number of elements it must compute (5 in this case), it retains this information when it is resurrected from WaterValues. Asserting that Wood is a sequence by finding the value of its elements then converting those elements to a sequence says nothing about the size of the sequence. In the other cases where sequences of elements are created, the size of the sequence is determined by some operation on a 5-element sequence (usually {0..4}), such as taking it to the exponent 0 which yields {1,1,1,1,1}.
- Since we do not need to ASSERT that units(Wood) = kg (done already), we can find the values of the Wood formula.
- WoodFormula.values = Water.
- Since Water must be a function of the masses of a planet's moons, and (x = Earth | Fire | Wood) && mass(Wood) = Water, we have to consider each possibility.
- Since Earth = moons-of(Water = Mercury), and Mercury has no moons, x cannot = Earth.
- Since Fire = moons-of(Metal = Venus), and Venus has no moons, x cannot be Fire.
- Since Wood = moons-of(Earth = planet Earth), and planet Earth has exactly one moon, x must be Wood.
- Therefore, the Wood denominator = a sequence with all elements being the mass of planet Earth's moon. [_]

---

<span class="expr">Metal-op[20] $\ge 10^{16}$ kg</span>

- Let x be a rounded number, as in 10^(elof N) * x = elof N. (Because must be able to be equal-to by EOF)
- Therefore, x = Water.
- Constant = Earth.
- Transforming a constant into a rounded number = (Earth -> Metal op -> Water).
- Therefore, Wood = Metal(a, b?).
- The only Metal operation which transforms number(constant) -> number(x) is "^".
- Therefore, Wood = a^b.
- Both a and b must have no units, therefore their units must be equal, and also equal to the units of Wood.
- Therefore, Wood = Fire ^ Metal
- Max must be used. Since Fire is determined first, there is no a priori limitation on Fire, therefore it must be 10. Since Metal must have no units, this must be enforced by taking Metal(that which has effective units) -> Fire op -> Water(target units = no units).
- Because max must be used, Fire = 10 and Water = 6. Therefore, Metal = 16.
- Therefore, Wood = 10^16, and Metal >= 10^16 (>= so that rounded numbers like 1.0000001 -> 1.00(0) can be accounted for as belonging to the appropriate set with the condition >= 1, for example).

---

$$
	\mathbf{Water} = 
	\sqrt
	{
		\frac
		{
			\mathbf{max} (m_n) +
			\mathbf{avg}
			\left( 
				m_n \cap \overline{ \mathbf{max} (m_n) }
			\right)
		}
		{
			m_e
		}
	}
$$

- where $m_n$ = masses of moons $\ge 10^{16}$kg of planet $n$,
- and $m_e$ = mass of the moon of Planet Earth.

---

<span class="expr">Wood = Fire ^ Metal</span>

1. OPERATION SELECT:
    - ASSERT: units(Wood elements) = no units.
    - Because Wood must be a sequence: elof Wood_i = Earth.
    - Because these elements must have no units, Earth(effective units) -> Metal op -> Water(target units = no units).
    - The only Metal op which maps number (input is number) -> number is "^".
    - Therefore, Wood = a ^ b.

2. OPERAND SELECT:
    - ASSERT: units(a) = units(b) = units(a ^ b) = no units.
    - Therefore, units(a && b) = units(a ^ b).
    - Furthermore, a && b = a ^ b = Wood.
    - Therefore, Wood = Fire ^ Metal.

---

<span class="expr">Wood = f(Water op)</span>

1.  OPERATION SELECT:
    - There is no need for units on f(planets) (e.g. kg).
    - Therefore, f(planets) = index representation of the planets = {0..4}.
    - ASSERT: Wood = f({0..4}).
    - Since Wood is already a function of an index, we only need to take the elof.
    - elof result(Wood) = Fire.
    - elof input({0..4})(Fire) = Earth.
    - input(Earth) -> Water op -> result(Fire).
    - Therefore, Wood = f(Water op).

---

<spac class="expr">Water op = {1,1,1,1,1}</span>

1.  OPERATION SELECT:
    - Selecting a value for the Water operation using its relation to the Fire(planet) operand can be compared to the procedure used to select the value for the Metal operation using its relation to the Fire({0..4}) operand.
    - ASSERT: Water = f({0..4} = Fire).
    - ATTEMPT: map sequence -> sequence.
        - Fire -> Wood op -> Water.
        - There is no Wood op which maps sequence -> sequence.
        - ATTEMPT FAILS.
    - ATTEMPT: map elof sequence -> valuesof formulaof operation.
        - elof Fire -> Metal op -> Formula.fromOperation(Water op).values.
        - In other words, Earth -> Metal op -> Water.
        - The only Metal op which maps number -> number is "^".
        - ATTEMPT SUCCEEDS.
    - Therefore, Water = a^b.

2.  OPERAND SELECT:
    - ASSERT: Water = f(Fire)
    - By the EOF, Water = Fire ^ b. (Fire is the first operand because f is transforming it.)
    - Therefore, Water = Fire ^ Fire.
    - By the EOF, b = Fire = 0. (Since all of the outputs are the same (= 1), this is effectively one operation as opposed to 5.)
    - Therefore, Water = {1,1,1,1,1}.

---

<span class="expr">Metal = {1..5}</span>

1.  OPERATION SELECT:
    - ASSERT: Metal = f(Water).
    - Metal = Metal(i).
    - Water = Water(i).
    - ATTEMPT: sequence(i) -> sequence(i)
        - i.e. the result is dependent upon (i).
        - Water -> Fire op -> Metal.
        - The only Fire operation which maps sequence -> sequence is "+".
        - If at least one of the operands is a sequence whose values are dependent upon (i), the Fire (+) operation is valid.
        - (Addition of sequences works like adding two vectors.)
        - ATTEMPT SUCCEEDS (TENTATIVE).
    - Therefore, Metal = a + b.

2.  OPERAND SELECT:
    - Since Metal = f(Water), the EOF states that Metal = Water + b.
    - Therefore, b must be Fire, and Metal = Water({1,1,1,1,1}) + Fire.
    - Since sequences when added together must be the same size, and the value for the Water sequence has a size of 5, the value for the Fire sequence must also have a size of 5.
    - The simplest 5-valued sequence represented by Fire which is dependent upon (i) is {0..4}.
    - Therefore, Metal = {1,1,1,1,1} + {0..4} = {1..5}.
    - Furthermore, since the result is dependent on (i), the "+" operation is valid.

---

<span class="expr">Fire = {-1,-1,-1,-1,-1}</span>

1.  OPERATION SELECT:
    - ASSERT: Fire = f(Water).
    - ATTEMPT: map sequence(i) -> sequence(i)
        - Water -> Wood op -> Fire.
        - There is no Wood op which maps sequence -> sequence.
        - ATTEMPT FAILS
    - ATTEMPT: map sequence(not a function of i) -> sequence(not a function of i).
        - sequence(i) -> sequence = Earth op.
        - Earth-op Fire(i) = Wood.
        - Earth-op Water(i) = Metal.
        - Wood -> Water op -> Metal.
        - The unary Water op transforms Water -> Fire.
        - Therefore, this is the minimum work possible to transform Water -> Fire.
        - Furthermore, by the EOF, this means that the Water op is the unary Water op.
        - The only unary Water op which maps sequence -> sequence is the additive negation operation (e.g. x -> -x).
        - It still remains to be seen if this operation produces a sequence which is not dependent upon (i).
        - ATTEMPT SUCCEEDS (TENTATIVELY).

2.  OPERAND SELECT:
    - The value being transformed by f is {1,1,1,1,1}(Water).
    - Therefore, Fire = negative-of {1,1,1,1,1} = {-1,-1,-1,-1,-1}.
    - Fire is not a function of (i).
    - Therefore, the unary Water operation is valid.
    - Furthermore, Fire = {-1,-1,-1,-1,-1}.

---

$$\mathbf{Wood} = [-1,-1,-1,-1,-1]^{[1..5]}$$ 
$$= [-1,+1,-1,+1,-1]$$.

---

<span class="expr">Metal = $10^{13} \mathbf{MeV/c^2}$</span>

- Prove: Metal = 10^13 MeV/c^2
- Metal(that which has effective units) -> Metal op -> Metal(that which has target units).
- The only Metal operation which maps number -> number is "^".
- Therefore, Metal = a ^ b.
- units(a) && units(b) = units(that which has no units).
- Therefore, a && b = Water.
- Furthermore, either a or b = Wood.
- If a = Wood, b = either Fire or Earth.
- Because the units of Metal are the correct units, Metal must be a scalar.
- elof/scalarof(Wood op) planets-index(Fire) = Earth.
- Fire -> Water op -> Earth
- The only Water op which maps sequence to scalar is size-of.
- size-of Fire = Metal = 5.
- Metal -> Wood op -> Earth. However, Wood-op(Metal) = Water =/= Earth, and Metal / x = Earth does not hold for any x.
- Therefore, by the EOF, b = Fire.
- Furthermore, Metal -> Earth op -> Fire
- Since it is possible to reach Fire from Metal in a single Earth operation (binary multiplication), the EOF states binary multiplication must be used (as opposed, for example, to a composite operation involving unary squaring of Metal).
- Therefore, Fire = 5(Metal) * Earth(2) = 10(Fire).
- Furthermore, Metal = 10^Wood.
- Since Wood > Fire, and there are infinite possibilities of Wood which are > 10(Fire), we must use the minimum of these possibilities represented by Wood (13).
- Therefore, Metal = 10^13 MeV/c^2

---

$$M_q = \left[ r_n^3 \times g(x_n) +  \sqrt{\frac{\mathbf{max} (m_n) + \mathbf{avg} \left( m_n \cap \overline{ \mathbf{max} (m_n) }\right)}{m_e}} \times y_n \times 10^{13} \right] \mathbf{MeV/c^2}$$

- $M_q =$ quark masses excluding the top quark (totalling 5 quarks).
- $r_n =$ radius of the nth planet.
- $g(x) =$ Gaussian curve where g(2) = 1.
- $x_n = [1, 1.25, 1.5, 1.75, 2]$.
- $m_n =$ set of the masses of the moons of the nth planet.
- $m_e =$ mass of Planet Earth's Moon.
- $y_n = [-1,+1,-1,+1,-1]$.