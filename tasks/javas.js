import gulp from 'gulp'
import { paths } from '../gulpfile'


export function javas() {
  return gulp.src(paths.javas, { since: gulp.lastRun(javas) })
    .pipe(gulp.dest('build/javas'))
}
