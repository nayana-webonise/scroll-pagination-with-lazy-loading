class SampleController < ApplicationController
  def show_data
    logger.info "### Inside show_data #####"
    logger.info "### Inside show_data #####{params[:data]}"
    logger.info "### Inside show_data #####{params}"
  end
end
