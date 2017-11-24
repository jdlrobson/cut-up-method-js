# Cut-up-method-js

The [cut up method/technique](https://en.wikipedia.org/wiki/Cut-up_technique) is a literary technique to form new works of art.
It was popularised by [William S. Burroughs](https://en.wikipedia.org/wiki/William_S._Burroughs).

It's like origami - give it some texts you have written and twist them and shape them into new things so that you can tease
out things in your subconcious or create something totally new.

For example...

## Add some Murakami...
Take some text from Haruki Murakami (on seeing the 100 perfect girl one beautiful april morning) and cut it up...

```
var murakami = `
  One beautiful April morning, in search of a cup of coffee to start the day, the boy was walking from west to east, while the girl, intending to send a special delivery letter, was walking from east to west, but along the same narrow street in the Harajuku neighborhood of Tokyo. They passed each other in the very center of the street. The faintest gleam of their lost memories glimmered for the briefest moment in their hearts. Each felt a rumbling in their chest. And they knew:

  She is the 100% perfect girl for me.

  He is the 100% perfect boy for me.
`;
```

## ...Add some Roald Dahl (the landlady)...

```
var dahl = `
 There was a pause. Billy picked up his
teacup and took another sip of his tea,
then he set it down again gently in its saucer. He waited for her to say
something else, but she seemed to have
lapsed into another of her silences. He sat
there staring straight ahead of him into the
far corner of the room, biting his lower lip.
 “That parrot,” he said at last. “You know
something? It had me completely fooled
when I first saw it through the window
from the street. I could have sworn it was
alive.”
 “Alas, no longer.”
 “It’s most terribly clever the way it’s been
done,” he said. “It doesn’t look in the least
bit dead. Who did it?”
 “I did.”
 “You did?”
 “Of course,” she said. “And have you
met my little Basil as well?” She nodded
towards the dachshund curled up so
comfortably in front of the fire. Billy looked
at it. And suddenly, he realised that this
animal had all the time been just as silent
and motionless as the parrot. He put out a
hand and touched it gently on the top of its
back. The back was hard and cold, and
when he pushed the hair to one side with
his fingers, he could see the skin 
`;
```

## ...and some Jack Kerouac (on the road)...

```
var kerouac = `
“What do you want out of life?” I wanted to take her and wring it out of her. She didn’t have the slightest idea what she wanted. She mumbled of jobs, movies, going to her grandmother’s for the summer, wishing she could go to New York and visit the Roxy, what kind of outfit she would wear – something like the one she wore last Easter, white bonnet, roses, rose pumps, and lavender gabardine coat. “What do you do on Sunday afternoons?” I asked. She sat on her porch. The boys went by on bicycles and stopped to chat. She read the funny papers, she reclined on the hammock. “What do you do on a warm summer’s night?” She sat on the porch, she watched the cars in the road. She and her mother made popcorn. “What does your father do on a summer’s night?” He works, he has an all-night shift at the boiler factory, he’s spent his whole life supporting a woman and her outpoppings and no credit or adoration. “What does your brother do on a summer’s night?” He rides around on his bicycle, he hangs out in front of the soda fountain. “What is he aching to do? What are we all aching to do? What do we want?” She didn’t know. She yawned. She was sleepy. It was too much. Nobody could tell. Nobody would ever tell. It was all over. She was eighteen and most lovely, and lost.`;
```


## ... and cut it all up... 

```
var cutupmethod = require( 'cut up method js' );
var cutup = cutupmethod([ murakami, dahl, kerouac ].join( ' ' ));
console.log(cutup);
```

## ... to make something new...
```
another sip of his tea,
then he set it out of life?” see the skin 
 
“what do you want of outfit she aching to chat. she read the funny papers, gleam of their lost memories in and her outpoppings and did.”
 “you did?”
 “of course,” she me.
 much. nobody could tell. nobody bicycles and stopped to she the one she wore last easter, white bonnet, could have sworn do on sunday afternoons?” i asked. she sat saucer. he waited for her to say
something went by on reclined on the hammock. slightest idea what she wanted. center of the street. the faintest glimmered for the briefest moment know
something? it had me completely it’s been
done,” it. east, while realised that this
animal had all an all-night shift at the boiler factory, delivery letter, was took down again gently in he works, he said. going to her grandmother’s for the summer, wishing motionless as want?” she didn’t know. she yawned. she the hair to one side with
his her porch. the boys “what do and most lovely, and and its else, but she seemed for a warm summer’s night?” i it was
alive.”
 “alas, no longer.”
 “it’s he hangs out in said at last. on she sat on the there was a pause. billy and wring it out of felt a boy was walking from the just as silent
and the parrot. he put whole life supporting a woman no all do? what do we was sleepy. it curled up so
comfortably in front of the fire. of him into the
far corner of is girl for me.

  he is the special walking from east to knew:

  she is the “that parrot,” he “you fooled
when i first west to the girl, intending to send a brother do on a summer’s night?” he perfect 100% perfect his lower silences. he sat
there in the road. she and her mother made her her. she didn’t have the she mumbled the soda fountain. “what he are its
back. the back was hard and cold, and
when “what window
from the he could i have you
met my little basil in their street in the harajuku out a
hand and touched it of coffee to start the day, to new as well?” she 
  one beautiful april morning, in search visit the roxy, what kind would york and wear – something like hearts. each rumbling chest. and they gabardine coat. narrow neighborhood of ahead very their 100% another of her staring straight room, biting lip.
 “what eighteen lost. bicycle, front of aching to do? the way “it doesn’t look in the it most along the same tokyo. they passed each other do you on you do “and it through the street. terribly was all dead. who did it?”
 his credit or adoration. does to have
lapsed into saw clever least
bit around on his what he has he’s spent your rides we was of a cup the west, but in the billy looked
“i said. nodded
towards the dachshund at pumps, and lavender porch, she watched the top of he “what does your father do on a over. she was he the time been gently on pushed boy 
 picked up his
teacup and of night?” too would ever tell. movies, she could go roses, to take jobs, rose the wanted cars popcorn. suddenly, fingers, summer’s
```
  
## and find your creativity.
```
met my little basil in their street in the harajuku out a hand and touched it of coffee to start the day
```
