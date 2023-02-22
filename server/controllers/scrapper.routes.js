const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const Scrapper = express.router();

Scrapper.get('hackerrank/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://www.hackerrank.com/${username}`);

    const $ = cheerio.load(response.data);

    const name = $('.header-section .inline-block h1').text();
    const location = $('.header-section .inline-block .location').text();
    const badges = $('.badges-list .badge').length;

    let questionsSolved = 0;
    $('.accordion-section .accordion-content ul li').each((i, element) => {
      const label = $(element).find('.label').text().toLowerCase();
      if (label === 'solved') {
        questionsSolved = parseInt(
          $(element).find('.value').text().replace(/,/g, '')
        );
      }
    });

    res.status(200).send({
      message: 'User Data Scrapped!',
      data: { name, location, badges, questionsSolved },
    });
  } catch (e) {
    res
      .status(500)
      .send({ message: 'An error occurred while scrapping the user details.' });
  }
});

module.exports = Scrapper;
