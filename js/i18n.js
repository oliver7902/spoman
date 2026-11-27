/*
 * 홈페이지 언어 전환 (한국어 기본 · 영어)
 *
 * - 주소에 ?lang=en 이 있으면 영어, ?lang=ko 또는 없으면 한국어.
 * - 고르는 순서: 주소의 lang → 이 브라우저에서 고른 값 → 한국어.
 * - 한국어 글은 index.html 에 그대로 있고, 영어 글만 아래 EN 에 있다.
 *     data-i18n="키"              → 그 요소 안의 HTML 을 EN[키] 로 바꾼다.
 *     data-i18n-attr="속성:키;…"  → 그 속성 값을 EN[키] 로 바꾼다.
 *   한국어로 돌아갈 때는 처음 읽어 둔 원래 값을 그대로 되돌린다.
 * - index.html 의 한국어 글을 고치면 같은 키의 영어도 여기서 고친다.
 */
(function () {
  'use strict';

  var CHECK = '<i class="fa fa-check-circle-o"></i>';

  var EN = {
    'meta.description': 'Schedules, live scores, starting lineups and season standings for major soccer, baseball and basketball leagues in Korea and around the world, all in one place.',

    // 첫 화면
    'hero.title': 'SPOMAN: Your Smart Sports Schedule Guide in Your Pocket',
    'hero.desc': 'Schedules, starting lineups, live scores and official standings for the world’s major soccer, baseball and basketball leagues, all at a glance.',
    'hero.f1': 'One schedule for major leagues in Korea and abroad (EPL, KBO, MLB, NBA and more)',
    'hero.f2': 'Quickly check starting lineups and absences before each game',
    'hero.f3': 'Live scoreboard and an intuitive timetable by date and sport',
    'hero.f4': 'An archive of season standings, past results and head-to-head records',

    // Key Features
    'features.desc': 'The two core values SPOMAN offers, explained visually with icons.',
    'features.schedule.title': 'Unified Schedules &amp; Starting Lineup Guide',
    'features.schedule.lead': 'Check schedules for multiple leagues in one place.',
    'features.schedule.body': '- Clean, calendar-style schedules for popular leagues, including international soccer, baseball in Korea and abroad, and pro basketball.<br>' +
      '- Quickly see each team’s starting lineup and absences announced before the game, plus the venue and the start time in standard time.',
    'features.records.title': 'Season Records &amp; Personalized Games',
    'features.records.lead': 'No cluttered communities or promotional posts. Just last round’s results, league standings, team season records and head-to-head summaries, neatly in one place.',
    'features.records.body': '- Register your favorite teams and get game start alerts, just like a calendar.',

    // 지원 리그
    'engine.title': 'Supported Leagues &amp; Data Archive',
    'engine.headline': 'The world’s major sports leagues on one timetable.',
    'engine.desc': 'We neatly organize scattered schedules and season records for you.',
    'engine.mission': 'SPOMAN provides schedules and records for the sports fans follow most, including soccer (EPL, La Liga, Champions League, K League), baseball (KBO, MLB, NPB) and basketball (NBA, KBL, WKBL), all in one consistent interface. From basic previews before the game to records after it ends, we focus on the key information you need to follow the action.',

    // FAQ
    'faq.desc': 'Frequently Asked Questions (FAQ)',
    'faq1.q': 'What is SPOMAN?',
    'faq1.a': 'SPOMAN is a sports information archive app that brings together schedules, live scores, starting lineups, official standings and past results for major soccer, baseball and basketball leagues in Korea and around the world.',
    'faq1.tag1': CHECK + '#SportsSchedules',
    'faq1.tag2': CHECK + '#StartingLineups',
    'faq1.tag3': CHECK + '#LeagueStandings',
    'faq1.tag4': CHECK + '#GameRecords',
    'faq2.q': 'Which sports and leagues do you cover?',
    'faq2.a': 'We cover schedules and records for popular leagues in Korea and abroad, including soccer (EPL, La Liga, UCL, K League), baseball (KBO, MLB, NPB) and basketball (NBA, KBL, WKBL). Supported leagues are updated with each season’s schedule.',
    'faq2.tag3': CHECK + '#FC #UCL #KLeague',
    'faq3.q': 'Can I use it without signing up?',
    'faq3.a': 'Even without an account, you can freely browse basic schedules, scores and standings.',
    'faq3.tag1': CHECK + '#FreeSchedules',
    'faq3.tag2': CHECK + '#EasySignIn',
    'faq4.q': 'How do paid features and payments work in the app?',
    'faq4.a': 'Core information such as schedules, live scores and basic standings is free. Some additional record-summary content can be purchased in the app if you choose, at the prices shown in the app. In-app viewing credits cannot be refunded in cash or transferred to others.',
    'faq4.tag1': CHECK + '#SocialSignIn',
    'faq4.tag2': CHECK + '#HowToUse',
    'faq4.tag3': CHECK + '#RecordArchive',
    'faq4.tag4': CHECK + '#BrowseWithoutAccount',

    // 사용 후기
    'story.desc': 'Outstanding reviews, backed by SPOMAN data',
    'story1.title': 'Realized how much information matters<br>Office worker Noh OO',
    'story1.date': 'Feb 1, 2026',
    'story1.text': '“If you love sports and want help with analysis, SPOMAN is hands down the best. From all kinds of analysis to data, it covers lots of sports like baseball, soccer and basketball. Give it a try, I highly recommend it!”',
    'story2.title': 'Busy and short on time<br>Business owner Lee OO',
    'story2.date': 'Feb 5, 2026',
    'story2.text': '“Running my shop, I never had time to look everything up. With SPOMAN I can easily check every schedule each morning. So convenient.”',
    'story3.title': 'Sports fan<br>Ha OO',
    'story3.date': 'Feb 8, 2026',
    'story3.text': '“It analyzes sports from around the world with data and statistics, so my understanding of sports has shot up.”',
    'story4.title': 'Data enthusiast<br>Ahn OO',
    'story4.date': 'Feb 10, 2026',
    'story4.text': '“Maybe because it’s AI analysis, the latest updates come out faster than in other apps. Great to use.”',

    // 문의
    'contact.desc': 'Send us your suggestions or questions about SPOMAN, and we’ll get back to you as soon as possible.',
    'contact.name': 'Name',
    'contact.email': 'Email address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    // 문의 폼 안내(js/app-on.js 가 spomanI18n.text 로 가져간다)
    'contact.required': 'Please fill in all required fields.',
    'contact.sent': 'Your message has been sent. We’ll get back to you soon.',
    'contact.failed': 'Your message could not be sent. Please try again in a moment.',

    // 아래쪽 소개·사업자 정보
    'like.tagline': 'Your smart sports schedule guide, right in your pocket',
    'like.about': 'SPOMAN is a pure sports information archive platform that provides schedules, starting lineups and objective game records for sports in Korea and around the world. This service does not offer, arrange or encourage sports betting, gambling or games of chance in any form.',
    'footer.biz': 'email. info@youlabs.io<br>Business Registration No. 323-63-00719<br>Mail-Order Sales Registration No. 2026-Goyang Deogyang-gu-0109'
  };

  var SUPPORTED = ['ko', 'en'];
  var STORAGE_KEY = 'spoman.web.lang';
  var root = document.documentElement;
  // 한국어 화면에서는 index.html 에 원래 적힌 lang(en)을 그대로 둔다.
  // lang 값이 바뀌면 띄어쓰기 폭이 달라져 한국어 화면 배치가 1~2px 바뀐다.
  var ORIGINAL_LANG = root.getAttribute('lang') || 'ko';
  var entries = null; // 처음 읽어 둔 한국어 값

  function pick(value) {
    var v = String(value || '').toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(v) >= 0 ? v : null;
  }

  function fromUrl() {
    var m = /[?&]lang=([^&#]*)/.exec(window.location.search);
    return m ? pick(decodeURIComponent(m[1])) : null;
  }

  function fromStorage() {
    try {
      return pick(window.localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function remember(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // 저장이 막힌 환경(비공개 창 등)에서는 이번 화면에서만 바뀐다.
    }
  }

  function snapshot() {
    if (entries) {
      return;
    }
    entries = [];
    var i, j, el, pairs, parts;
    var nodes = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      entries.push({ el: el, attr: null, key: el.getAttribute('data-i18n'), ko: el.innerHTML });
    }
    nodes = document.querySelectorAll('[data-i18n-attr]');
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      pairs = el.getAttribute('data-i18n-attr').split(';');
      for (j = 0; j < pairs.length; j++) {
        parts = pairs[j].split(':');
        if (parts.length === 2) {
          var name = parts[0].trim();
          entries.push({ el: el, attr: name, key: parts[1].trim(), ko: el.getAttribute(name) });
        }
      }
    }
  }

  function textFor(entry, lang) {
    if (lang === 'en' && Object.prototype.hasOwnProperty.call(EN, entry.key)) {
      return EN[entry.key];
    }
    return entry.ko;
  }

  function apply(lang) {
    snapshot();
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var value = textFor(entry, lang);
      if (entry.attr) {
        if (entry.el.getAttribute(entry.attr) !== value) {
          entry.el.setAttribute(entry.attr, value);
        }
      } else if (entry.el.innerHTML !== value) {
        entry.el.innerHTML = value;
      }
    }
    root.setAttribute('lang', lang === 'ko' ? ORIGINAL_LANG : lang);
    root.setAttribute('data-lang', lang);

    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var k = 0; k < buttons.length; k++) {
      var on = buttons[k].getAttribute('data-set-lang') === lang;
      buttons[k].setAttribute('aria-current', on ? 'true' : 'false');
    }
  }

  function updateUrl(lang) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url.toString());
    } catch (e) {
      // 주소를 못 바꿔도 화면 전환은 된다.
    }
  }

  // 다른 스크립트가 지금 언어의 문구를 가져갈 때 쓴다(영어 문구가 없으면 넘겨준 한국어).
  window.spomanI18n = {
    text: function (key, ko) {
      return textFor({ key: key, ko: ko }, root.getAttribute('data-lang'));
    }
  };

  // 이 파일은 본문 끝(jQuery 앞)에서 읽으므로 바꿀 글은 이미 모두 읽혀 있다.
  apply(fromUrl() || fromStorage() || 'ko');

  document.addEventListener('click', function (event) {
    var target = event.target;
    var button = target && target.closest ? target.closest('[data-set-lang]') : null;
    if (!button) {
      return;
    }
    event.preventDefault();
    var lang = pick(button.getAttribute('data-set-lang')) || 'ko';
    remember(lang);
    apply(lang);
    updateUrl(lang);
  });
})();
