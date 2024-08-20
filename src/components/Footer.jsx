import React from "react";
import logo from "../../src/MDB.svg";

// icons


const Footer = () => {
  return (
    <footer className="text-center pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Logo"
            className="mb-4"
            style={{ width: "120px" }}
          />
          <p className="text-md">
            Привет, <span className="text-lightBlue font-bold">User!!!</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0">
          <div className="px-4 py-2 text-left"> {/* Добавлено text-left */}
            <h4 className="text-white font-bold mb-2">ГЛАВНОЕ</h4>
            <ul>
              <li>
                <a href="https://www.themoviedb.org/about" className="text-lightBlue hover:underline">
                  О TMDB
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/about/get-in-touch/" className="text-lightBlue hover:underline">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/talk" className="text-lightBlue hover:underline">
                  Форумы поддержки
                </a>
              </li>
              <li>
                <a href="https://developer.themoviedb.org/docs/getting-started" className="text-lightBlue hover:underline">
                  API
                </a>
              </li>
              <li>
                <a href="https://status.themoviedb.org/" className="text-lightBlue hover:underline">
                  Статус системы
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2 text-left"> {/* Добавлено text-left */}
            <h4 className="text-white font-bold mb-2">УЧАСТВУЙТЕ</h4>
            <ul>
              <li>
                <a href="https://www.themoviedb.org/bible" className="text-lightBlue hover:underline">
                  Библия редакторов
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/movie/new" className="text-lightBlue hover:underline">
                  Добавить новый фильм
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/tv/new" className="text-lightBlue hover:underline">
                  Добавить новый сериал
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2 text-left"> {/* Добавлено text-left */}
            <h4 className="text-white font-bold mb-2">СООБЩЕСТВО</h4>
            <ul>
              <li>
                <a href="https://www.themoviedb.org/documentation/community/guidelines" className="text-lightBlue hover:underline">
                  Руководства
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/discuss" className="text-lightBlue hover:underline">
                  Обсуждения
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/leaderboard" className="text-lightBlue hover:underline">
                  Доска почёта
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-2 text-left"> {/* Добавлено text-left */}
            <h4 className="text-white font-bold mb-2">О ПРАВЕ</h4>
            <ul>
              <li>
                <a href="https://www.themoviedb.org/terms-of-use" className="text-lightBlue hover:underline">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/api-terms-of-use" className="text-lightBlue hover:underline">
                  API Правила использования
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/privacy-policy" className="text-lightBlue hover:underline">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="https://www.themoviedb.org/dmca-policy" className="text-lightBlue hover:underline">
                  DMCA Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;