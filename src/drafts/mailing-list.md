---
title: "What happens when you subscribe to this blog?"
status: "published"
date: "2020-08-10"
tags: ["making-the-blog", "tech"]
---

<!-- ![My turquoise Zubma outfit!](../images/workout_outfits/cover.jpg) -->

I recently added a subscribe button!

<!-- Pic of subscribe button -->
<!-- caption: By the way, is it easy enough to find? --> 
<!-- Is it irritating that you need to click a button to get the input bar for the email address? --> 
<!-- Give me all your UI preferences in the comments, I'm designing-on-the-fly -->

Isn't it beautiful? 

Please excuse me if I'm a little over-proud of this blog because, well, it's my baby.
I've been coding it up from scratch as I go! 

Why would I go to the trouble of re-implementing a blogging platform when there are perfectly efficient software like WordPress or Blogger that do it all for you?
The answer is, clearly, to show off my mad tech skills.
I had a blog back in high school through Blogger (oh, you want to see it? really, you insist? ok [here it is](TODO)).
Since then, I've gotten a couple of degrees in Computer Science, so really, if I can't upgrade my sewing blog, what was it all for.

Actually, it's been nice putting the blog together. 
It's been pretty cool seeing how much I've learned in the past five years.
I actually have learned a ton...phew!

Another big plus of coding my own blog is that I can customize it exactly how I want. 
<!-- I can use the same customized setup that I use for coding for writing and publishing blog posts. -->
I can even add custom programs to my posts.
When I was in high school, I tried to add a simple interactive program to a Blogger post, and that was clearly frowned upon.
I had to paste my JavaScript inside the HTML editor (spiritually, that's akin to shoving a piece of silk chiffon into your interfacing drawer), and then once I finally got it working I had to never update the post again because if I did it would break.

Now, because **I run this website**, I can write scripts to do whatever I want, like this fun button:

<Button>
Change every picture in this post to a picture of Annie's dog, Louie
</Button>
<Button>
Please randomly select more pictures of Louie!
</Button>
<Button>
I would like to return to the actual content, please.
</Button>

The big downside of coding my own blog is that, well, I have to code everything. 
If there's a feature I want, I have to put it there.
Comment box? 
I set up a Disqus integration.
Automatic post excerpting on the home page? 
Figured out the logic for that too.
You may notice that there is no pagination on the home page, and no way to search the blog content.
I'm saving those upgrades until I have enough posts to make them worthwhile, haha!

This week, I set up a feature that's a must-have for gaining a blog following: an email subscription option.
Hence, the new shiny subscribe button.
For the rest of this post, I'm going to walk you through what actually happens when you hit that subscribe button.
Hopefully this will provide some useful tips if you're technically inclined, or give a little behind-the-scenes peek into how some of the nuts-and-bolts of blogging works.

## Step 1: The Email List

The first thing you have to do when setting up an email subscription is to keep a mailing list of all the people who should get your emails.
When someone comes to the blog and enters their email address into the input box, that information needs to be saved somewhere so that when there's a new post, I know who to send updates to.

This is a little trickier than it sounds, because, well, as websites go, _this one is pretty dumb_. 
By that I mean, it doesn't actually have any way of storing data from users.
I can post content to this page that you can see if you come visit it, but I don't have way of taking data from you.
The technical term for this is that it's a _static site_. 
It has a _front end_ (the part of the website that lays out how the webpage looks in your browser and responds to your clicks) but only a very simple _back end_ (the part of the website that stores and modifies data).
<!-- Basically, the back end just shows your computer data, likes images or text, that I have already posted to this blog, but there is no way for you to contribute to the information on this page. --> 
I would like to keep it like that. 
It's pretty easy to find websites on the Internet that will publish static content for free, whereas maintaining your own back-end requires money and tech support that I do not want to provide.

However, there's a workaround: I can outsource back-end logic, including data storage, to a third-party website.
For example, check out the comment box at the bottom of this page. 
The comment section is hosted by a company called Disqus.
When you post a comment, it gets sent to a Disqus server, and Disqus--not this website--stores it.
When you view the comments, Disqus is in charge of figuring out which comments to send you and in what order, and then retrieving those comments from its database and sending them to you.

I had to find a similar third-party provider for keeping track of my subscriber mailing list.
Fortunately, there's a service just for that.
It's called MailChimp, and it's a website that helps you keep track of contacts and then reach out to them via email.

MailChimp even has a plugin for the software that I'm using to code this blog (the software I'm using is a framework called Gatsby), so setting it up was really easy.

TODO: include code.

The line xxxx is telling Gatsby to send your email address to my MailChimp account and add you to the mailing list for "annie-makes-tech-styles."
Then there's some code to make sure that the request completed succesfully. 

Now you're on the mailing list! 
Let's starting writing you an email.

## Step 2: The Email Content

As a subscriber, you should get an email every time there's a new blog post.
That email should include some specific information about the post, like its title, a link back to the post, maybe even an excerpt.

I _could_ craft a custom email alert for every post I write...but that would get very tedious very quickly.
I would much prefer it if I could automatically pull content from the blog and use it to populate the email.

Fortunately, there's already a standardized format for pulling data from blogs! It's called an RSS (todo meaning?) feed.
Here's what one looks like: 

It's pretty ugly, because it's meant to be read by computers, not humans.
As the owner of a blog, you can publish your content in an RSS format, and then a host of other data consumers, like e-readers or email software, can read it and use that data constructively. 

Fortunately, Gatsby has a plugin that automatically generates the RSS feed for a blog.
I can just include this plugin in my project and every time I publish a new post, the feed will update without me doing any extra work.
The feed is available publicly at the url TODO.

Then, I can just pop this url into MailChimp, and it can find all the necessary data it needs to generate a new email burst.
I set up an email template and make sure all the right fields are showing up the way I want them. 
Here's an email preview for this post!

TODO 

## Step 3: Pulling it together

This is the point where I implore: _if you experience a bug with your email subscription, **please** let me know_. 
I tested it out with my email and my mom's email, but still.
Bugs happen.

Oh yeah, and if you haven't yet--you should subscribe ;) 
