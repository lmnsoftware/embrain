<!-- # How Elemental Math Works -->

# Legend

* $\ominus = -2 = \tt{water}$,
* $\odot = -1 = \tt{metal}$,
* $\otimes = \pm0 = \tt{earth}$,
* $\oplus = +1 = \tt{fire}$,
* $\oslash = +2 = \tt{wood}$.

# Example: Elemental Reduction

Determine the element representing the variable $n$ when $n \in \{0,1,\dots,4\}$, where $\in$ denotes the [set membership](https://en.wikipedia.org/wiki/Element_(mathematics)#Notation_and_terminology "Element of a Set on Wikipedia") relationship.

1. In **Part 2** of the documentation, elements will be assigned to each mathematical construct used by *elemental math*. Here, we make use of these associations, and denote the association of the element $\otimes$ with the mathematical concept $A$ by the notation usually reserved for binomials, but suitable for our purposes, which looks like $$\binom {\otimes} {A}.$$

1. In **Part 3** of the documentation, each [elemental operation](/documentation/glossary#elemental-operation) will be assigned a result, which can be expressed in a few different ways. Where the operation of $\otimes$ on $\oslash$ yields $\ominus$, this can be expressed as:
	1. $$\binom {\otimes} {A} \binom {\oslash} {B} \to \ominus,$$
	1. $$\otimes(\oslash)\to \ominus,$$
	1. $$f(\otimes,\oslash) \to \ominus.$$

1. It will be shown in **Part 2** that $\otimes$ represents the relationship $\in$ and $\oslash$ represents the set of integers $\mathbb{Z}$. It will also be shown that the operation of $\otimes$ on $\oslash$ yields $\ominus$. For now, it suffices to say that these concepts can be expressed as follows:

$$\binom {\otimes} {\in} \binom {\oslash} {\mathbb{Z}} \to \binom {\ominus} {n}.$$

2. Continuing with the other relationships of $0\le n$ and $n \le 4$:

$$\binom {\oplus} {0} \binom {\odot} {\le} \binom {\ominus} {n} \to \otimes,$$
$$\binom {\ominus} {n} \binom {\odot} {\le} \binom {\odot} {4} \to \oplus.$$

3. Finally, where $A \cap B$ is the [intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory) "Intersection (set theory) on Wikipedia") of two sets $A$ and $B$, the whole set $\{0,1,\dots,4\}$ defined by these relationships is given by:

$$\left \lbrack \binom {\ominus} {n \in \mathbf{Z}} \binom{\otimes}{\cap} \binom {\oplus} {n \le 4} \right \rbrack\binom{\otimes}{\cap} \binom {\otimes} {0 \le n}  \to \oplus. \enspace \blacksquare$$

The above process is summarized visually in **Figure 1** (below), where **`bold font`** indicates the operation, and the usage of `f(operation, x, y)` encodes the idea that the elemental math process maps each set of inputs `x` and an optional `y` to a distinct output.

![Figure 1](https://elemental-math.com/wp-content/uploads/2020/08/fig1.svg)

# Example: Elemental Expansion

Determine that the set represented by $\oplus$ is $\{0,1,\dots,4\}$.

## [Control Flow](https://en.wikipedia.org/wiki/Control_flow) of Elemental Expansion: Description

1. Derivation of the *economy of form* technique
1. Proof that *economy of form* is the first technique to be checked against

1. Proof that the *economy of form* technique doesn't work
	1. The *economy of form* states that the simplest way to yield the correct result is the correct way. Because the simplest way to yield an output of a set is to extract the set property of an element, we attempt x & set(Wood) = Fire. However, looking up B for which A = Earth, C = Wood, and D = Fire shows that there is no B for which this is true.
1. Formula/values: The formula/values technique is reserved for formulas represented by elements (which in this case would be Fire) which map a (sequence of) inputs to a (sequence of) outputs/values. Because Fire represents a set, and not such a formula, the formula/values technique cannot be used.
1. Input-element/output-element: Because Fire does not represent a formula, there is no input. Therefore, the input/result technique cannot be used.
1. Output-element/output-type: set(Wood) --> Metal --> Fire. Because the output is a set, the only way to build the set definition is out of logical/set operations / conditionals (i.e. to use set builder notation). Operation must be logical || (or) or set union. In order to define the subset, we must first start with a set. Variable(Wood) && Fire = Water $\in \mathbb{Z}$. In other words, the variable represented by Fire, which will define our set (as per Set-builder Notation) is an element of the integers. However, in order for the operation to be || or union, it must accept two elements-of, and not be a range (otherwise what would define the numbers withing the range that belong to the set?). The only way to yield Fire from Water || x is if x = Metal. However, Metal = $\in \mathbb{N}$. When something is $\in \mathbb{N}$ || $\in \mathbb{Z}$, it is sufficient to say that it is $\in \mathbb{Z}$. Therefore, the economy of form is violated, and this method cannot be used.
1. Function-of/result: The set is a function of n, which = Fire.variable = Water. Therefore, Water --> Wood --> Fire. Thus, the operation must be XOR. Because n elof Wood, this must be combined with Wood to yield Fire. Wood = elof Fire = elof imaginary numbers. However, since there is no overlap between integers and imaginary numbers, the XOR operation is redundant (and is more complex than the OR operation, since there are two conditions: one that it be in either set, the second that it not be in both), therefore the economy of form is violated, and the function-of/result method cannot be used.
* The set/output-type is a function of the variable n (in that its conditionals are expressed with reference to this variable): set(Wood) --> Earth --> Fire.variable(Water); therefore, Earth = operation (but which operation?)
* Result of Earth operation remains as Fire
* Because we are building a set, we must use logical operations on conditions (e.g. n < 2) to define the values that the set can take. As such, Earth represents the logical operation & (and).
* Water must be one of the conditions, because, no matter what the other conditions are, all Water is always $\in \mathbb{Z}$. Additionally, because Water represents the element-of condition, it must be part of an AND operation. Because Water must be part of an && operation and must also follow the rules of Initial --> Change --> Final, such that Initial && Change --> Final, this suggests that the options are Water --> Metal --> Earth and Water --> Fire --> Metal. Because these three conditions (Water, Fire | Metal, Earth) are sufficient to yield Fire, the economy of form states that no additional conditions should be imposed. Since only Water & Fire & Earth yields Fire, this must be the set of conditions.
* \>= Water = Earth = Metal(Water); Fire >= Water = Metal(Water, Fire) = Metal. < Water = Wood = Wood(Water); Fire < Water = Wood(Water, Fire) = Wood. Wood(Water, Metal) = Earth, therefore Metal \< Water such that 4 \< n. Result = Earth. In order to render the set of integers that are greater than 4, we must start at 4+1. This can be rendered more simply as a single operation: n >= 5. \< Water = Wood; Wood < Water = Fire, therefore n > 2. Therefore, either n > 2 and n > 4, or n > 2 and n >= 3, or n > 2 and n >= 0. Therefore, Fire must be yielded via <=. n <= 4. Earth = n > 4 or Earth = n >= 0 or Earth = n >= 3. Therefore, Earth = n >= 0.
* n(Water) <= Metal is the only way to yield Fire from Water using <=. Due to the economy of form, Metal = 4. There are two ways to yield Earth: n(Water) >= 3(Wood), and n(Water) >= 0(Fire). Because n >= 3 leaves us with n=3 and n=4, this would be more easily expressed as n=3 || n=4, therefore having it expressed as n $\in \mathbb{Z}$ & n >=0 and n <=4 violates the economy of form (three conditions when two would suffice). Therefore, n >= 0 --> Earth. Therefore, we have proven that n $\in \mathbb{Z}$ & n >= 0 & n <= 4.


# Example Theorem (Inference from Common Condition)

**Example Theorem:** The result of an exponentiation operation is a complex number.

$$\binom {\otimes} {\in} \binom {\otimes} {\mathbb{C}} \to \binom {\oplus} {\in\mathbb{C}},$$
$$\binom {\oslash} {x} \binom {\otimes} {=} \binom {\oplus} {\in\mathbb{C}} \to \binom {\ominus} {x\in\mathbb{C}},$$
$$\binom {\ominus} {y} \binom {\otimes} {=} \binom {\oplus} {\in\mathbb{C}} \to \binom {\odot} {y\in\mathbb{C}},$$
$$\binom {\ominus} {x\in\mathbb{C}} \binom {\odot} {\wedge} \binom {\odot} {y\in\mathbb{C}} \to \binom {\oplus} {x^y},$$
$$\oplus = \binom {\otimes} {\in} \binom {\otimes} {\mathbb{C}}. \enspace \blacksquare$$

- In other words, **if** Fire $\in\mathbb{C}$ **then** $x^y$ = Fire, where $x \in \mathbb{C}$ and $y \in \mathbb{C}$.
