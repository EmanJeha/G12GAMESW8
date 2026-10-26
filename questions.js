/* Questions for both games. Edit text here; keep the structure. */
window.SITE_INFO = {
 "badge": "Grade 12 · Unit 4 · Week 8 · Session 1",
 "titleText": "Counting Sort Games",
 "warmup": {
  "label": "Warm-up",
  "sub": "Guess today’s topic"
 },
 "wrapup": {
  "label": "Wrap-up",
  "sub": "Prove you got it"
 },
 "titleHTML": "<span class=\"c1\">C</span><span class=\"c2\">o</span><span class=\"c3\">u</span><span class=\"c4\">n</span><span class=\"c5\">t</span><span class=\"c1\">i</span><span class=\"c2\">n</span><span class=\"c3\">g</span> <span class=\"c4\">G</span><span class=\"c5\">a</span><span class=\"c1\">m</span><span class=\"c2\">e</span><span class=\"c3\">s</span>"
};
window.GAMES = {
 "warmup": {
  "badge": "Unit 4 · Week 8 · Session 1 · Warm-up",
  "name": "Count It Up!",
  "titleHTML": "<span class=\"c1\">C</span><span class=\"c2\">o</span><span class=\"c3\">u</span><span class=\"c4\">n</span><span class=\"c5\">t</span> <span class=\"c1\">I</span><span class=\"c2\">t</span><br><span class=\"c3\">U</span><span class=\"c4\">p</span><span class=\"c5\">!</span>",
  "intro": "Real-life puzzles hide today’s mystery topic. Every correct answer flips two letters. Answer fast for bonus points and crack the topic for +200!",
  "rules": [
   "Play with your partner on one device",
   "Faster correct answers earn bonus points",
   "Each correct answer flips 2 letters",
   "Guess the topic early: +200",
   "Your score appears live on the smart board"
  ],
  "seconds": 40,
  "points": 100,
  "floaters": [
   "0",
   "4",
   "9",
   "1",
   "6",
   "IIII",
   "+1",
   "97"
  ],
  "topic": "Counting Sort",
  "mystery": {
   "label": "Today’s mystery topic",
   "phrase": "COUNTING SORT",
   "order": [
    12,
    4,
    9,
    1,
    6,
    11,
    0,
    7,
    3,
    10,
    5,
    2,
    8
   ],
   "perCorrect": 2,
   "bonus": 200,
   "accept": [
    "counting sort",
    "countingsort",
    "counting",
    "count sort",
    "counting sorting"
   ],
   "finalQ": "Put all the clues together. What is today’s topic?",
   "finalOptions": [
    "Bubble Sort",
    "Counting Sort",
    "Binary Search",
    "Insertion Sort"
   ],
   "finalAnswer": 1,
   "finalWhy": "Counting Sort never compares two items. It counts how many times each value appears, then uses those counts to place every value straight into its position, just like the trays, the tallies and the queue."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Exam trays",
    "skill": "Analyze",
    "q": "30 exam papers are marked from 0 to 10. There is one tray for each mark. How many times do you compare two papers with each other?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">7</span><span class=\"chip\" style=\"background:#3A86FF\">2</span><span class=\"chip\" style=\"background:#FF9F1C\">9</span><span class=\"chip\" style=\"background:#14C3A2\">0</span><span class=\"chip\" style=\"background:#8F4DFF\">4</span><span class=\"arrow\">+</span><span class=\"chip new\">…</span>",
    "options": [
     "30 times",
     "None. Each paper goes straight into its own tray",
     "About 900 times",
     "Once per tray"
    ],
    "answer": 1,
    "why": "You only read each paper’s mark and drop it in the matching tray. No paper is ever compared with another."
   },
   {
    "type": "mc",
    "ctx": "Trays needed",
    "skill": "Apply",
    "q": "Marks go from 0 up to a maximum of 10. How many trays do you need?",
    "options": [
     "10",
     "11",
     "30",
     "9"
    ],
    "answer": 1,
    "why": "One tray for every value from 0 to the maximum: 0, 1, 2 … 10 is 11 trays. That is max + 1."
   },
   {
    "type": "mc",
    "ctx": "Class vote",
    "skill": "Apply",
    "q": "The class votes for a trip: Jeddah Corniche, Taif or AlUla. You make tally marks. What are you finding for each option?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">Corniche IIII</span><span class=\"chip\" style=\"background:#3A86FF\">Taif II</span><span class=\"chip\" style=\"background:#FF9F1C\">AlUla IIIII</span>",
    "options": [
     "The order the votes arrived",
     "How many times each value appears (its frequency)",
     "The biggest vote",
     "Which voter is tallest"
    ],
    "answer": 1,
    "why": "A tally counts the frequency of each value. Counting how often each value appears is the first big step of today’s topic."
   },
   {
    "type": "mc",
    "ctx": "Line up",
    "skill": "Infer",
    "q": "2 students scored 0, 3 scored 1 and 1 scored 2. In a line sorted by score, how many students stand BEFORE the first student who scored 2?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">0: 2 students</span><span class=\"chip\" style=\"background:#3A86FF\">1: 3 students</span><span class=\"arrow\">+</span><span class=\"chip new\">2: 1 student</span>",
    "options": [
     "2",
     "3",
     "5",
     "6"
    ],
    "answer": 2,
    "why": "Everyone with a smaller score goes first: 2 + 3 = 5. Adding up the counts (a running total) tells you exactly where each value starts."
   },
   {
    "type": "mc",
    "ctx": "Fair order",
    "skill": "Evaluate",
    "q": "Sara and Huda both scored 8. Sara handed in first. A fair sort keeps Sara before Huda. What is this property called?",
    "options": [
     "Stable",
     "In-place",
     "Random",
     "Recursive"
    ],
    "answer": 0,
    "why": "A stable sort keeps equal values in their original order. Remember this word: today’s algorithm is stable."
   },
   {
    "type": "mc",
    "ctx": "Bad fit",
    "skill": "Evaluate",
    "q": "Which job is a BAD fit for “one box for every possible value”?",
    "options": [
     "Exam marks from 0 to 100",
     "Shoe sizes from 30 to 46",
     "Phone numbers from 0 to 9,999,999,999",
     "Days of the month, 1 to 31"
    ],
    "answer": 2,
    "why": "Ten billion possible phone numbers would need ten billion boxes. That wastes huge memory. Small, known ranges are the good fit."
   },
   {
    "type": "mc",
    "ctx": "Spot the pattern",
    "skill": "Synthesize",
    "q": "What do the exam trays, the vote tally and the line-up all have in common?",
    "options": [
     "Compare items in pairs and swap them",
     "Count how many of each value, then use the counts to place every item",
     "Split the list in half again and again",
     "Pick a random item and start again"
    ],
    "answer": 1,
    "why": "Count, add up the counts, place each item. No item is compared with another. That idea is today’s topic!"
   }
  ],
  "endHTML": "<div class=\"reveal\"><span class=\"pill\">Today's topic</span><div class=\"big\">Counting Sort</div><p class=\"lede\">A non-comparison sort: count how often each value appears, build a cumulative sum, then place each value directly into its position.</p></div>\n<div class=\"recap\"><div><b>Count</b>Frequency list of size max + 1</div><div><b>Accumulate</b>Cumulative sum gives positions</div><div><b>Place</b>Walk in reverse to stay stable</div></div>"
 },
 "wrapup": {
  "badge": "Unit 4 · Week 8 · Session 1 · Wrap-up",
  "name": "Counting Showdown",
  "titleHTML": "<span class=\"c1\">C</span><span class=\"c2\">o</span><span class=\"c3\">u</span><span class=\"c4\">n</span><span class=\"c5\">t</span><span class=\"c1\">i</span><span class=\"c2\">n</span><span class=\"c3\">g</span><br><span class=\"c4\">S</span><span class=\"c5\">h</span><span class=\"c1\">o</span><span class=\"c2\">w</span><span class=\"c3\">d</span><span class=\"c4\">o</span><span class=\"c5\">w</span><span class=\"c1\">n</span>",
  "intro": "Ten challenges on today’s lesson: trace it, read it, change it. Prove you and your partner really get Counting Sort.",
  "rules": [
   "Play with your partner on one device",
   "Faster correct answers earn bonus points",
   "Tap tiles to build lists",
   "Tap a code line to answer",
   "Your score appears live on the smart board"
  ],
  "seconds": 60,
  "points": 100,
  "floaters": [
   "0",
   "1",
   "4",
   "4",
   "4",
   "6",
   "9",
   "ord"
  ],
  "topic": "Counting Sort",
  "exit": {
   "q": "Explain how Counting Sort sorts without comparing. When would you NOT use it?",
   "placeholder": "Counting Sort...",
   "model": "Counting Sort counts how many times each value appears in a frequency list (size max + 1), turns those counts into a cumulative sum, then walks the input in reverse and places each value at frequency[value] − 1. No two items are ever compared. Do not use it for negative numbers (without an offset), floats, or values with a very large range, because the frequency list would need too much memory."
  },
  "questions": [
   {
    "type": "order",
    "ctx": "The steps",
    "skill": "Remember",
    "q": "Put the Counting Sort steps in order.",
    "sub": "Tap the tiles in order to fill [0] to [3].",
    "tiles": [
     "Count each value",
     "Place in reverse",
     "Find the max",
     "Cumulative sum"
    ],
    "answer": [
     "Find the max",
     "Count each value",
     "Cumulative sum",
     "Place in reverse"
    ],
    "why": "Find the maximum to size the frequency list, count the occurrences, accumulate the counts, then walk the input in reverse and place each element."
   },
   {
    "type": "mc",
    "ctx": "Frequency list",
    "skill": "Apply",
    "q": "<code>myList = [4, 4, 6, 9, 4, 0, 1]</code>. How long is the frequency list?",
    "options": [
     "7",
     "9",
     "10",
     "4"
    ],
    "answer": 2,
    "why": "max_val is 9, so frequency = [0] * (9 + 1) has 10 boxes: indexes 0 to 9."
   },
   {
    "type": "mc",
    "ctx": "Count it",
    "skill": "Apply",
    "q": "After the counting loop, what is <code>frequency[4]</code>?",
    "scene": "<span class=\"chip\" style=\"background:#FF4F8B\">4</span><span class=\"chip\" style=\"background:#3A86FF\">4</span><span class=\"chip\" style=\"background:#FF9F1C\">6</span><span class=\"chip\" style=\"background:#14C3A2\">9</span><span class=\"chip\" style=\"background:#8F4DFF\">4</span><span class=\"chip\" style=\"background:#FFC233\">0</span><span class=\"chip\" style=\"background:#FF4F8B\">1</span>",
    "options": [
     "1",
     "3",
     "4",
     "5"
    ],
    "answer": 1,
    "why": "The value 4 appears three times in the list, so box 4 holds 3."
   },
   {
    "type": "mc",
    "ctx": "Cumulative sum",
    "skill": "Analyze",
    "q": "Counts are <code>[1, 1, 0, 0, 3, 0, 1, 0, 0, 1]</code>. What is the list after the cumulative sum?",
    "options": [
     "<code>[1, 2, 2, 2, 5, 5, 6, 6, 6, 7]</code>",
     "<code>[1, 1, 0, 0, 3, 0, 1, 0, 0, 1]</code>",
     "<code>[0, 1, 4, 4, 4, 6, 9]</code>",
     "<code>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>"
    ],
    "answer": 0,
    "why": "Each box adds everything before it: 1, 1+1=2, 2, 2, 2+3=5, 5, 5+1=6, 6, 6, 6+1=7."
   },
   {
    "type": "line",
    "ctx": "Stable",
    "skill": "Analyze",
    "q": "Tap the line that makes Counting Sort STABLE.",
    "code": [
     "myList = [4, 4, 6, 9, 4, 0, 1]",
     "N = len(myList)",
     "max_val = max(myList)",
     "frequency = [0] * (max_val + 1)",
     "for i in range(N):",
     "    frequency[myList[i]] += 1",
     "for i in range(1, len(frequency)):",
     "    frequency[i] += frequency[i - 1]",
     "output = [0] * N",
     "for i in range(N - 1, -1, -1):",
     "    key = myList[i]",
     "    output[frequency[key] - 1] = key",
     "    frequency[key] -= 1",
     "myList = output",
     "print(\"Sorted list:\", myList)"
    ],
    "answer": 9,
    "why": "for i in range(N - 1, -1, -1) walks the input in reverse, so equal values are placed from the back and keep their original order."
   },
   {
    "type": "order",
    "ctx": "Trace it",
    "skill": "Apply",
    "q": "<code>data = [7, 2, 5, 2, 9, 1, 5]</code>. Build the sorted output.",
    "sub": "Tap the numbers in order to fill index [0] to [6].",
    "tiles": [
     7,
     2,
     5,
     2,
     9,
     1,
     5
    ],
    "answer": [
     1,
     2,
     2,
     5,
     5,
     7,
     9
    ],
    "why": "Sorted list: [1, 2, 2, 5, 5, 7, 9]. The two 2s and the two 5s keep their original order because the sort is stable."
   },
   {
    "type": "line",
    "ctx": "Descending",
    "skill": "Create",
    "q": "Tap the ONE line you would change to sort in DESCENDING order.",
    "code": [
     "myList = [4, 4, 6, 9, 4, 0, 1]",
     "N = len(myList)",
     "max_val = max(myList)",
     "frequency = [0] * (max_val + 1)",
     "for i in range(N):",
     "    frequency[myList[i]] += 1",
     "for i in range(1, len(frequency)):",
     "    frequency[i] += frequency[i - 1]",
     "output = [0] * N",
     "for i in range(N - 1, -1, -1):",
     "    key = myList[i]",
     "    output[frequency[key] - 1] = key",
     "    frequency[key] -= 1",
     "myList = output",
     "print(\"Sorted list:\", myList)"
    ],
    "answer": 11,
    "why": "Change output[frequency[key] - 1] = key to output[N - frequency[key]] = key. The result becomes [9, 6, 4, 4, 4, 1, 0]."
   },
   {
    "type": "mc",
    "ctx": "Characters",
    "skill": "Understand",
    "q": "Why does the character version use <code>ord(char)</code>?",
    "options": [
     "To make letters uppercase",
     "To turn each character into a number that can be a list index",
     "To compare two letters",
     "To remove duplicates"
    ],
    "answer": 1,
    "why": "Counting Sort needs integer keys. ord(\"a\") is 97, so the letter can use frequency[97] as its box."
   },
   {
    "type": "mc",
    "ctx": "ord()",
    "skill": "Apply",
    "q": "What does <code>ord(\"a\")</code> return, and what about <code>ord(\"ab\")</code>?",
    "options": [
     "1, then 2",
     "97, then a TypeError",
     "97, then 195",
     "\"a\", then \"ab\""
    ],
    "answer": 1,
    "why": "ord() takes ONE character and returns its code: 97 for \"a\". A longer string raises a TypeError."
   },
   {
    "type": "mc",
    "ctx": "Limits",
    "skill": "Evaluate",
    "q": "Which list can basic Counting Sort NOT sort without changes?",
    "options": [
     "<code>[3, 1, 2]</code>",
     "<code>[\"c\", \"a\", \"b\"]</code>",
     "<code>[-4, 7, -2]</code>",
     "<code>[0, 100, 50]</code>"
    ],
    "answer": 2,
    "why": "Negative numbers have no box: frequency[-4] would count from the end of the list. Next session you will fix this with an offset."
   }
  ],
  "endHTML": "<div class=\"recap\"><div><b>Count</b>Frequency list of size max + 1</div><div><b>Accumulate</b>Cumulative sum gives each position</div><div><b>Place</b>Reverse loop keeps it stable</div></div>"
 }
};
