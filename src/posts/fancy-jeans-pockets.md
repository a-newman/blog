---
title: "Fancy pockets with everyday supplies"
status: "published"
date: "2020-08-19"
tags: ["jeans", "pockets"]
---

import CapBox from "../components/caption_box.js"
import stitchingVideo from "../images/jeans_pockets/stitching.mp4"

![My newest pair of jeans pockets, aren't they great?!!.](../images/jeans_pockets/pockets_2.jpg)


If I'm going to make blue jeans at home, I figure, they need to have fancy pockets.

But the question is _how_ to transfer a design from my brain to the denim.
My machine doesn't have super fancy embroidery settings or anything.
I am also not an artist or a graphic designer.

Fortunately, my experience as an artsy computer scientist has left me peculiarly prepared for just this situation.
I have some experience using sub-par tools to achieve reasonable production value. 
I have Ubuntu installed on my computer because I find Windows extremely frustrating for doing development/research work, and Macs are expensive :cry: 
Unfortunately, a lot of everyday applications are designed for Windows/Mac only :cry: which means I make do with a lot of free and open-source software.
Let's just say that I make the figures in my papers in Google Slides :grimacing:

So here's how I made my most recent pair of jeans pockets.
It involves free software, an online graphing calculator, raiding the craft closet, and as little free-handing as possible.
But in all seriousness, this technique, hacky as it may be, has actually yielded some surprisingly good results! 

<hr endexcerpt="true"/>

## The design

<CapBox >

![On the left, some quick sketches I made of what I wanted the thread loop on the left pocket to look like. On the center and right, the templates I used for my pockets.](../images/jeans_pockets/pocket_printouts.jpg)
*Here are my pocket templates. On the left, I sketched out different ways the thread on the left pocket could loop through the needle.
The center/right panels are my pocket templates.
I did most of the designing on the computer, and hand-sketched in the thread on the left pocket. 
The templates may not be glamorous, but hopefully the end result will be.* :wink:

</CapBox>

Here's my idea for my pockets: a loop of red thread enters through the left pocket, threads through a white needle angled in the corner of the pocket, then exits frame and reappears on the right pocket, where it makes a classic jeans-pocket loop-de-loop.
I think it's pretty cute.
I like that one pocket is a cutesy sewing reference and the other is very traditional, kind of like telling the origin story of that oft-seen motif. 

I do not trust myself to freehand a template for this design, so I pulled out my trusty graphic design software aka Google slides. 

I measured the dimensions of the pocket pattern I was working from and tried to recreate the same dimensions on my slide. 
These pockets are symmetrical and all the edges are straight, which made it relatively easy.

![The pocket shape I recreated with the needle icon on the left pocket.](../images/jeans_pockets/pocket_shape.png)

I found a nice needle icon, but I struggled to find a clean loop-de-loop image to paste on top of the right pocket.
Googling didn't turn up anything, so then I then tried searching for mathematical graphs of loops, which led me to an academic paper on the physics of roller coaster loops, which was more math than I had bargained for.

<CapBox >

![Google search results for "loop-de-loop", which contain roller coasters, hot wheel tracks, and airplane smoke, but no good clean loops.](../images/jeans_pockets/loop_de_loop_search_results.png)
*A sampling of search results for the term "loop-de-loop". I guess I missed an opportunity to put Sponge Bob on my booty.*

</CapBox>

Eventually, I figured that the best way to get a clean loop was to graph it myself. 

<CapBox>

<iframe class="shadowBorder" sandbox="allow-scripts allow-forms allow-pointer-lock allow-same-origin" src="https://www.desmos.com/calculator/fanooucfci" title="Loop-de-loop in Desmos Graphing calculator"></iframe>

_I didn't expect to need a math lesson to finish my pants! 
A graph of a loop can be described by_ parametric equations_, which is where both the_ x_ and the_ y_ coordinate at any given point on the curve are given as a function of a parameter, usually denoted by_ t_. 
Think of the loop as graphing the position of a roller coaster car over time, where_ (x(t), y(t))_ gives the location of the car at time_ t_.
A loop is a variation of a circle.
The parametric equations that correspond to moving in a perfect circle forever are_ (cost(t), sin(t))_.
For a loop, we add an extra term to the x-coordinate,_ t/2_. This term increases linearly with_ t_, which means that every time around the "circle", the x-coordinate scootches over a little bit, producing the rightward-moving "loop".
The y-coordinate is multiplied by a factor of_ 0.75_. This "squashes" the height of the circle to 3/4 of it's width, producing a shorter, rounder loop. 
You can change the shape of the loop by playing around with this number.
Give it a shot! 
The plot is interactive, so you can change the numbers and see what happens._

</CapBox>

Tada!

![My completed pocket templates.](../images/jeans_pockets/pocket_template_digital_2.png)

## The template 

I exported my design as a PDF and printed out the pages. 
Printer paper was too thick to use directly, so I dug some gift-wrap tissue paper out of the crafts closet--the kind you use to stuff a gift bag.
I pinned it on top of the printed template and traced over the design.

![Transferring my pocket template to the tissue paper.](../images/jeans_pockets/template_and_tissue.jpg)

Then I cut out the tissue paper templates and pinned them to the pockets. 

<CapBox>

![My tissue-paper template pinned to the fabric pocket.](../images/jeans_pockets/template_pinned_to_pocket.jpg)
*Apparently I did not-a-great-job reproducing the shape of the pockets, because the template didn't quite match up...but good enough!*

</CapBox>


## Sewing it on

![Sewing over the tissue template.](../images/jeans_pockets/sewing_over_template.jpg)

Now, all you have to do is sew over the template! Yup, right on over it! 
The paper is thin enough that you can just tear it off afterwards.
I find that using a slightly longer stitch length is beneficial here--it makes the tissue significantly easier to tear off. 
Increasing my stitch length from 2.4 (default) to 3 (my new preferred topstitching length) helped a lot.


<CapBox>

![The pocket tissue template after sewing it to the fabric.](../images/jeans_pockets/templates_sewn_on.jpg)
*Here's what they look like once you've sewn over the template. 
I decided to use a double line of stitching for the red "thread" to emphasize it a little more.
Also, I ended up redoing the right pocket because I wanted the loop to be a little bigger.*

</CapBox>

I keep the feed dogs down when doing this, even when dealing with very tight corners and curves--without that, it makes it basically impossible to get an even stitch length.
I basically do one stitch at a time and pivot between every stitch. 
In effect, this means that I keep one hand on the presser foot lever at all times.
This is not as inefficient as it sounds. 
I took a video so you can see what it looks like.


<CapBox width="300px">

<p>
<video src={stitchingVideo} alt="How I sew over the lines in the template, pivoting between every stitch" controls></video>
</p>

</CapBox>

Then, tear the paper away, and tada! :tada:


![The completed pockets.](../images/jeans_pockets/pockets.jpg)

I like this tissue template approach better than drawing a design on with chalk.
I think it lets you be more precise, especially when dealing with complex designs. 
Here's another design I did on a recent pair of jeans. 

<CapBox>

![](../images/jeans_pockets/initials_pockets_2.jpg)
*It's my initials, not, like my brother thought, a lopsided heart and a squiggly.*

</CapBox>

What fancy pockets should I make next? 
