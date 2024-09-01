document.querySelector('.randomize').addEventListener('click', function() {
  const customName = document.getElementById('customname').value;
  const storyParagraph = document.querySelector('.story');
  const stories = [
    `Once upon a time, there was a brave explorer named ${customName} who ventured into a mysterious forest. In the heart of the forest, they discovered a hidden village of talking animals who threw a grand feast in their honor.`,
    `${customName} was a famous inventor who created a machine that could turn everyday objects into gold. However, one day, their machine accidentally turned their pet cat into a giant golden statue, leading to a series of hilarious adventures.`,
    `In a land far away, ${customName} was known as the greatest magician in the kingdom. They performed a spectacular magic show, but when their final trick went awry, they accidentally turned the king into a frog, leading to an unexpected quest to reverse the spell.`
  ];

  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  storyParagraph.textContent = randomStory;
  storyParagraph.style.visibility = 'visible';
});
